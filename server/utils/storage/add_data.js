const StorageUtils = require('./StorageUtils');
StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "עמרו",' +
    '"lastName" : "כוהן",' +
    '"age" : "6",' +
    '"pic": "/resource/img/amro.jpg",' +
    '"hobbies": "אוכל בולים",' +
    '"about": "אוהב לשחק עם הכלב"' +
  '}\');'
);

StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "דוד",' +
    '"lastName" : "גולדברג",' +
    '"age" : "36",' +
    '"pic": "/resource/img/david.jpg",' +
    '"hobbies":  "לועס בקבוקים",' +
    '"about": "אוהב לשחק עם הכלב"' +
  '}\');'
);

StorageUtils.query(
  'insert into users (name, password, data) values (\'shula\', \'1234\', \'' +
  '{ ' +
    '"name" : "שולה",' +
    '"lastName" : "ירושלמית",' +
  '}\') returning *;'
).then((result) => {
    let user = result.rows[0];
    StorageUtils.query(
      'insert into notification_clients (client_id, token) values ($1, \'ceVyAuq4yk0:APA91bHGLRS3BnfGdZf1HahKEnIBrCkmxGZOajrKzbl4oSkcVOLEJkPBCa3cjHsa8vtx0Ifasg67mEZ3xNrbAP1XUuwxzvGFPm8LnNK0GDEPQjq_RCC9Osj7nGOckVo5ashG0u9wFuvX\');',[user.id]
    );
});

StorageUtils.query(
  'insert into users (name, password, data) values (\'moshe\', \'1234\', \'' +
  '{ ' +
    '"name" : "משה",' +
    '"lastName" : "המלך",' +
  '}\') returning *;'
).then((result) => {
    let user = result.rows[0];
    StorageUtils.query(
      'insert into notification_clients (client_id, token) values ($1, \'d_AO6BT-ZrM:APA91bHhMDgsI1zWeBCU8RdbE0JvxF-KqEwHg8_8vYROOy5zHjqjPzQ1d-hKMj4o61SJlUAOTrya0oCfbbP_rWL_pZrsaf_P3nO9Xzlh3yLsMOM577WwST6tYCBLwRnlHUmxALm4SJ-j\');',[user.id]
    );
});
