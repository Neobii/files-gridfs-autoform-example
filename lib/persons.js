Persons = new Mongo.Collection("persons");

Persons.helpers({
	profilePic() {
    let image = Images.find({_id: this.profilePicId});
    return image.cursor;
  },
  backgroundPic() {
    let image = Images.find({_id: this.backgroundPicId});
    return image.cursor;
  }
})

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
				collection: 'Images'
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
})