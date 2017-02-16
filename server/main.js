import { Meteor } from 'meteor/meteor';
import grid from 'gridfs-stream';

Gfs = null;
const mongo = MongoInternals.NpmModules.mongodb.module;
Gfs = grid(Meteor.users.rawDatabase(), mongo);
