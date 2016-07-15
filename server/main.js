import { Meteor } from 'meteor/meteor';
import grid from 'gridfs-stream'; 

Meteor.startup(() => {
  // code to run on server at startup
});


Grid = grid;

Gfs = null;
const mongo = MongoInternals.NpmModules.mongodb.module; // eslint-disable-line no-undef
Gfs = Grid(Meteor.users.rawDatabase(), mongo);
