Template.listPersons.onCreated(function(){
	this.autorun(() => {
		this.subscribe("persons");
	})
})

Template.listPersons.helpers({
	persons() {
		return Persons.find({});
	},
	getFormId() {
		return "updatePerson" + this._id;
	}
})