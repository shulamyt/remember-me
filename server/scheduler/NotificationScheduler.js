const SchedulerService = require('./ScheduleService');
const MessageService = require('./../message/MessageService');
const NotificationService = require('./../notification/NotificationService');


class NotificationScheduler {

    constructor(){
        this.scheduler = new SchedulerService();
        this.massagesMap = {};
    }

    scheduleByDate({messageId, date}){
        if(date<Date.now()){
            this._notifyNow(messageId);
        }
        else {
            this.scheduler.add(date, this._notify.bind(this,messageId));
        }
    }

    _notifyNow(messageId) {
        this._notify(messageId);
    }

    _notify(messageId){
        MessageService.get(messageId).then((messageObj) => {
            console.log(messageId + ": Scheduler is working!!!");
            let scId = NotificationService.send({
                clientId: messageObj.userid,
                title: messageObj.message.details.title,
                body: messageObj.message.details.body
            });
            this.massagesMap[messageId] = scId;
        }).catch((message)=>{throw new Error("error message handeling " + message)});
    }

}
module.exports = new NotificationScheduler();
