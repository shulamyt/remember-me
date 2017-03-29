const NotificationScheduler = require('./NotificationScheduler');

var date = new Date(Date.now()+5000);


NotificationScheduler.scheduleByDate(1,date);
NotificationScheduler.notifyNow(2);

// scheduler.changeScheduling(Date.now()+500);
//
// console.log('date:'+(date.getDate())+'/'+(date.getMonth()+1)+'/'+(date.getFullYear()));
