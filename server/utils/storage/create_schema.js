const StorageUtils = require('./StorageUtils');
StorageUtils.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, password VARCHAR(40) not null)');
StorageUtils.query('CREATE TABLE IF NOT EXISTS notification_clients(client_id VARCHAR(40) PRIMARY KEY, token VARCHAR(512) not null)');
StorageUtils.query('CREATE TABLE IF NOT EXISTS messages(id SERIAL PRIMARY KEY, userid INTEGER not null, message VARCHAR(1024) not null)');
StorageUtils.query('CREATE TABLE IF NOT EXISTS students(id SERIAL PRIMARY KEY, mentorid INTEGER not null, data VARCHAR(1024) not null)');
