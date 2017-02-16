Meteor.publish('persons', () => {
  return Persons.find();
});
