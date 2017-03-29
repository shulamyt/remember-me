const Storage = require('./MessageStorage');
class MessageService {
    getByStudent(studenId) {
        return Storage.getByUser(studenId);
    }

    add({userid, message}) {
        return new Promise((resolve, reject)=>{
            Storage.add({userid, message}).then((fetchedMessage)=>resolve(this._toMessage(fetchedMessage))).catch((message)=>{throw new Error("error add message to storage " + message)});
        });
    }

    get(id){
        return new Promise((resolve, reject)=>{
            Storage.get(id).then((fetchedMessage)=>resolve(this._toMessage(fetchedMessage)))
                            .catch((message)=>{throw new Error("error get message wit id " + id)});
        });
    }

    _toMessage(fetchedMessage) {
        let message = null;
        try{
            message = JSON.parse(fetchedMessage.message);
        }
        catch(error){
            reject("failed to parse message data " + fetchedMessage.message);
        }
        return {
                    message: message,
                    userid: fetchedMessage.userid,
                    id: fetchedMessage.id
                };
    }

    update({messageid, message}) {
        return Storage.update({messageid, message});
    }

    delete(id) {
        return Storage.delete(id);
    }
}

module.exports = new MessageService();
