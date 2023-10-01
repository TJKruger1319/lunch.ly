/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client('postgresql://tj:password@localhost:5432/lunchly');

db.connect();

module.exports = db;
