const SchedulerService = require('./ScheduleService');
const MessageService = require('./../message/MessageService');
const NotificationService = require('./../notification/NotificationService');


class NotificationScheduler {

    constructor(){
        this.scheduler = new SchedulerService();
        this.messagesMap = {};
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
        MessageService.get(messageId).then(({message, studentId}) => {
            console.log(messageId + ": Scheduler is working!!!");
            let scId = NotificationService.send(studentId,message.title, message.body);
            this.massageMap[messageId] = scId;
        });
    }

}
module.exports = new NotificationScheduler();
