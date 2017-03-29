const SchedulerService = require('./ScheduleService');

class NotificationScheduler {

  constructor(){
    this.scheduler = new SchedulerService();
    this.messagesMap = {};
  }

  scheduleByDate(messageId, date){
    var scId = this.scheduler.add(date, this._notify.bind(this,messageId));
  }

  notifyNow(messageId) {
    this._notify(messageId);
  }

  _notify(messageId){
      console.log(messageId + ": Scheduler is working!!!");
  }

}
module.exports = NotificationScheduler;
