const Storage = require('./UserStorage');
class UserService {
    get() {
        return Storage.get();
    }

    add(user) {
        return Storage.add(user);
    }
}
module.exports = new UserService();
