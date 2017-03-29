const Storage = require('./MessageStorage');

class MessageService {
    getByStudent(studenId) {
        return new Promise((resolve, reject)=>{
            Storage.getByUser(studenId).then((fetchedMessages)=>{
                    for(var i = 0; i < fetchedMessages.length; i++){
                        let message = fetchedMessages[i];
                        if(message.message === undefined || message.message === null){
                            continue;
                        }
                        var messageData;
                        try{
                            messageData = JSON.parse(message.message);
                        }
                        catch(error){
                            reject("failed to parse message message " + message.message);
                        }
                        fetchedMessages[i] = Object.assign(
                            {id: message.id, 
                            mentorId: message.mentorid}, 
                            messageData);
                    }
                    resolve(fetchedMessages);
            });
        });
        return Storage.getByUser(studenId);
    }

    add({userid, message}) {
        return new Promise((resolve, reject)=>{
            Storage.add({userid, message})
            .then((fetchedMessage)=> {
                let message = this._toMessage(fetchedMessage);
                resolve(message)
            }).catch((message)=>{throw new Error("error add message to storage " + message)});
        });
    }

    get(id){
        return new Promise((resolve, reject)=>{
            Storage.get(id).then((fetchedMessage)=>resolve(this._toMessage(fetchedMessage)))
                            .catch((message)=>{throw new Error("error get message with id " + id)});
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
