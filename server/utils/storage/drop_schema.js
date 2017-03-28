const StorageUtils = require('./StorageUtils');
StorageUtils.query('DROP TABLE IF EXISTS users');
StorageUtils.query('DROP TABLE IF EXISTS notification_clients');
