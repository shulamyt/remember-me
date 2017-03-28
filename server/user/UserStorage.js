const StorageUtils = require('./../utils/storage/StorageUtils');
class UserStorage {
    get() {
        return StorageUtils.query('select * from users')
                    .then((result) => (result.rows));
    }

    add(user) {
        return StorageUtils.query('insert into users (name, pass) values ($1, $2) returning *',
                                    [user.name, user.pass])
                            .then((result) => (result.rows[0]));
    }
}

module.exports = new UserStorage();
