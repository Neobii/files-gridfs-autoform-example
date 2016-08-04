import fs from 'fs'

if (Meteor.isClient) {
  Meteor.subscribe('files.images.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.images.all', () => Images.collection.find({}));
}

Images = new FilesCollection({
   collectionName: 'Images',
   allowClientCode: true,
   debug: Meteor.isServer && process.env.NODE_ENV === 'development',
   onBeforeUpload(file) {
     if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) return true;
     return 'Please upload image, with size equal or less than 10MB';
   },
   onAfterUpload(image) {
     // Move file to GridFS
     Object.keys(image.versions).forEach(versionName => {
       const writeStream = Gfs.createWriteStream({
         filename: image.name,
         contentType: image.type,
         metadata: { versionName, imageId: image._id, storedAt: new Date() },
       });

      fs.createReadStream(image.versions[versionName].path).pipe(writeStream);

      writeStream.on('close', Meteor.bindEnvironment(file => {
        const property = `versions.${versionName}.meta.gridFsFileId`;

        // If we store the ObjectID itself, Meteor (EJSON?) seems to convert it to a
        // LocalCollection.ObjectID, which GFS doesn't understand.
        this.collection.update(image._id, { $set: { [property]: file._id.toString() } });
        this.unlink(this.collection.findOne(image._id), versionName); // Unlink files from FS
       }));
     });
   },
   interceptDownload(http, image, versionName) {
    const _id = (image.versions[versionName].meta || {}).gridFsFileId;
    if (_id) {
      const readStream = Gfs.createReadStream({ _id });
      readStream.on('error', err => { throw err; });
      readStream.pipe(http.response);
    }
    // Serve file from either GridFS or FS if it wasn't uploaded yet
    return Boolean(_id);
   },
 });