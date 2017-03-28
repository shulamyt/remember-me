const StorageUtils = require('./StorageUtils');
StorageUtils.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, pass VARCHAR(40) not null)');
StorageUtils.query('CREATE TABLE IF NOT EXISTS notification_clients(client_id VARCHAR(40) PRIMARY KEY, token VARCHAR(512) not null)');
