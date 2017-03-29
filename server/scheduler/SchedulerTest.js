const NotificationScheduler = require('./NotificationScheduler');

var date = new Date(Date.now()+5000);

var shceduler;
scheduler = new NotificationScheduler();

scheduler.scheduleByDate(1,date);
scheduler.notifyNow(2);

// scheduler.changeScheduling(Date.now()+500);
//
// console.log('date:'+(date.getDate())+'/'+(date.getMonth()+1)+'/'+(date.getFullYear()));
