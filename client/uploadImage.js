Template.uploadImage.onCreated(function () {
  this.departmentIdId = new ReactiveVar(false);
  this.currentUpload = new ReactiveVar(false);
});



Template.uploadImage.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  },
  departmentIdId() {
    return Template.instance().departmentIdId.get();
  },
  departmentIds() {
    return DepartmentIds.find({}).cursor;
  },
  departmentId() {
    var depId = Template.instance().departmentIdId.get();
    var depFile = DepartmentIds.find({_id: depId});
    return depFile.cursor;
  }
});

Template.uploadImage.events({
  'click [data-action="remove-department-id"]'(e, t) {
    t.departmentIdId.set(false);
  },
  'change #capture': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case 
      // multiple files were selected
      var upload = DepartmentIds.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          //alert('Error during upload: ' + error);
        } else {
          //alert('File "' + fileObj.name + '" successfully uploaded');
          template.departmentIdId.set(fileObj._id);
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
});