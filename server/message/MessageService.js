const Storage = require('./MessageStorage');
class MessageService {
    getByStudent(studenId) {
        return Storage.getByUser(studenId);
    }

    add({userid, message}) {
        return new Promise((resolve, reject)=>{
            Storage.add({userid, message}).then((messageRow)=>{
                resolve(messageRow);
            });
        });
    }

    get(id){
        return new Promise((resolve, reject)=>{
            Storage.get(id).then((messageRow) => {
                resolve({
                            "message": messageRow.message,
                            "sudentId": messageRow.userid
                        });
            });
        });
    }

    update({messageid, message}) {
        return Storage.update({messageid, message});
    }

    delete(id) {
        return Storage.delete(id);
    }
}

module.exports = new MessageService();
