const SchedulerService = require('./ScheduleService');

var date = new Date(Date.now()+10000);

var shceduler;
scheduler = new SchedulerService(date,function(){
  console.log("Scheduler is working!!!")
});

scheduler.changeScheduling(Date.now()+500);

console.log('date:'+(date.getDate())+'/'+(date.getMonth()+1)+'/'+(date.getFullYear()));
