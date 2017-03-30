const StorageUtils = require('./../utils/storage/StorageUtils');
class ClientStorage {
    get() {
        return StorageUtils.query('select * from notification_clients')
                    .then((result) => (result.rows));
    }

    getById(id) {
        return StorageUtils.query('select * from notification_clients where client_id = $1', [id])
                    .then((result) => (result.rows[0]));
    }

    add({clientId, token}) {
        return StorageUtils.query('insert into notification_clients (client_id, token) values ($1, $2) returning *',
                                    [clientId, token])
                            .then((result) => (result.rows[0]));
    }

    update({clientId, token}) {
        return StorageUtils.query('update notification_clients set token = $2 where client_id = $1',
                                    [clientId, token])
                            .then((result) => (result.rows[0]));
    }
}

module.exports = new ClientStorage();
