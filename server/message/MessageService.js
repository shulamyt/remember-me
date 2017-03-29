const Storage = require('./MessageStorage');
const NotificationScheduler = require('../scheduler/NotificationScheduler');
class MessageService {
    getByStudent(studenId) {
        return Storage.getByUser(studenId);
    }

    add({userid, message}) {
        return new Promise((resolve, reject)=>{
            Storage.add({userid, message}).then((message)=>{
                schedule = message.schedule;
                if(typeof schedule=="undefined" || schedule==null || schedule.date==null || typeof schedule.date=="undefined"){
                    console.log("no schedule was found!");
                    reject();
                }
                NotificationScheduler.scheduleByDate({message.messageId, schedule.date});
                resolve();
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
