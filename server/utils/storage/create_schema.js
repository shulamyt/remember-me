const StorageUtils = require('./utils');
StorageUtils.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, pass VARCHAR(40) not null)');
StorageUtils.query('CREATE TABLE IF NOT EXISTS notification_clients(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, token VARCHAR(512) not null)');
