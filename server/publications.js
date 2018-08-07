import { Meteor }  from 'meteor/meteor';
import { Persons } from '/lib/persons.js';

Meteor.publish('persons', () => {
  return Persons.find();
});
