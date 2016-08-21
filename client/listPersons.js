Template.listPersons.onCreated(function(){
  this.update = new ReactiveVar(false);
  this.autorun(() => {
    this.subscribe("persons");
  });
});

Template.listPersons.helpers({
  persons() {
    return Persons.find({});
  },
  getFormId() {
    return "updatePerson" + this._id;
  },
  update(_id) {
    return Template.instance().update.get() === _id
  }
});

Template.listPersons.events({
  'click [data-button-update]'(e, template) {
    e.preventDefault();
    template.update.set(template.update.get() === this._id ? false : this._id);
    return false;
  }
});