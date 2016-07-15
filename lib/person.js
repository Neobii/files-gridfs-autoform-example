Persons = new Mongo.Collection("persons");

Persons.attachSchema({
	name: {
		type: String,
		label: "Name"
	},
	profilePicId: {
		type: String,
		label: "Profile Pic Id"
	}
})