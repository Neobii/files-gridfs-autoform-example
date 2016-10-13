Persons = new Mongo.Collection("persons");

Persons.helpers({
  profilePic() {
    return Images.find({_id: this.profilePicId});
  },
  backgroundPic() {
    return Images.find({_id: this.backgroundPicId});
  }
});

Persons.attachSchema({
  name: {
    type: String,
    label: "Name"
  },
  profilePicId: {
    type: String,
    label: "Profile Pic Id",
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: 'Images',
        uploadTemplate: 'uploadField', // <- Optional
        previewTemplate: 'uploadPreview' // <- Optional
      }
    }
  },
  backgroundPicId: {
    type: String,
    label: "Background Pic Id",
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: 'Images'
      }
    }
  }
});