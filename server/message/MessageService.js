const Storage = require('./MessageStorage');
class MessageService {
    getByStudent(studenId) {
        return Storage.getByUser(studenId);
    }

    add({userid, message}) {
        return Storage.add({userid, message});
    }

    update({messageid, message}) {
        return Storage.update({messageid, message});
    }

    delete(id) {
        return Storage.delete(id);
    }
}

module.exports = new MessageService();
