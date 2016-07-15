Meteor.publish("persons", function(){
	return Persons.find()
})