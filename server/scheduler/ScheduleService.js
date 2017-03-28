const Scheduler = require('node-schedule');

// Raw format of Scheduler: (sec[optional], min, hour, day, month, day of week)
// if some param is not require it can be set as '*'

// var date = new Date(...);
// var j = Scheduler.scheduleJob(date, function);


class SchedulerService{

  constructor(scheduleType, executeFunction) {
    //TODO - maybe to check the scheduleType format/properties
    this.executeFunction = executeFunction;
    var executeSchedule = Scheduler.scheduleJob(scheduleType,executeFunction);
    this.executeSchedule = executeSchedule;
  }

  cancel(){
    this.executeSchedule.cancel();
  }

  changeScheduling(newSchedule){
    this.oldExecuteFunction = this.executeFunction;
    this.cancel();
    return new this.constructor(newSchedule,this.oldExecuteFunction);
  }

}
module.exports = SchedulerService;
