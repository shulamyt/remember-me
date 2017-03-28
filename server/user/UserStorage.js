const StorageUtils = require('./../utils/storage/StorageUtils');
class UserStorage {
    get() {
        return StorageUtils.query('select * from users')
                    .then((result) => (result.rows));
    }

    getByUserName(userName){
        return StorageUtils.query('SELECT * FROM  users where name=$1',[userName])
                    .then((result) => (result.rows[0]));
    }

    add(user) {
        return StorageUtils.query('insert into users (name, password) values ($1, $2) returning *',
                                    [user.name, user.password])
                            .then((result) => (result.rows[0]));
    }
}

module.exports = new UserStorage();
