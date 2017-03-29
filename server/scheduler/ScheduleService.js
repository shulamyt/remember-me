const Scheduler = require('node-schedule');

// Raw format of Scheduler: (sec[optional], min, hour, day, month, day of week)
// if some param is not require it can be set as '*'

// var date = new Date(...);
// var j = Scheduler.scheduleJob(date, function);


class SchedulerService{

  add(scheduleType, executeFunction) {
    return Scheduler.scheduleJob(scheduleType,executeFunction);
  }

  cancel(id){
    Scheduler.cancel(id);
  }

  update(id, scheduleType, executeFunction){
    this.cancel(id);
    return this.add(scheduleType, executeFunction);
  }

}
module.exports = SchedulerService;
