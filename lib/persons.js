import { Mongo }    from 'meteor/mongo';
import { Images }   from './images.js';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
SimpleSchema.setDefaultMessages({
  initialLanguage: 'en',
  messages: {
    en: {
      uploadError: '{{{value}}}'
    }
  }
});

const Persons = new Mongo.Collection('persons');

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
    label: 'Name'
  },
  profilePicId: {
    type: String,
    label: 'Profile Pic Id',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        insertConfig: {
          transport: 'http'
        },
        uploadTemplate: 'uploadField', // <- Optional
        previewTemplate: 'uploadPreview' // <- Optional
      }
    }
  },
  backgroundPicId: {
    type: String,
    label: 'Background Pic Id',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        insertConfig: {
          transport: 'http'
        }
      }
    }
  }
});

export { Persons };
