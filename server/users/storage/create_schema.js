const StorageUtils = require('./utils');
StorageUtils.query('CREATE TABLE users(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, pass VARCHAR(40) not null)');
