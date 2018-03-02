import { Meteor }         from 'meteor/meteor';
import { MongoInternals } from 'meteor/mongo';

import grid from 'gridfs-stream';

const Gfs = grid(Meteor.users.rawDatabase(), MongoInternals.NpmModules.mongodb.module);

export { Gfs };
