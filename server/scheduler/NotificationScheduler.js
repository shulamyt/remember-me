const SchedulerService = require('./ScheduleService');
const MessageService = require('../message/MessageService');

class NotificationScheduler {

    constructor(){
        this.scheduler = new SchedulerService();
        this.messagesMap = {};
    }

    scheduleByDate({messageId, date}){
        let scId;
        if(date<Date.now()){
            scId =NotificationScheduler.notifyNow();
        }
        else {
            scId = this.scheduler.add(date, this._notify.bind(this,messageId));
        }
        this.massageMap[messageId] = scId;
        return scId;
    }

    notifyNow(messageId) {
        this._notify(messageId);
    }

    _notify(messageId){
        // MessageService.
        console.log(messageId + ": Scheduler is working!!!");
    }

}
module.exports = new NotificationScheduler();
