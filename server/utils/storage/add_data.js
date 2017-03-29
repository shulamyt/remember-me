const StorageUtils = require('./StorageUtils');
StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "עדי",' +
    '"lastName" : "לוי",' +
    '"age" : "10",' +
    '"image": "/res/adi.jpg",' +
    '"hobbies": "ריקוד, מוסיקה,טיולים",' +
    '"about": "ילדה חייכנית, עם שמחת חיים, מקובלת על חבריה"' +
  '}\');'
);

StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "אמיר",' +
    '"lastName" : "כוכבי",' +
    '"age" : "12",' +
    '"image": "/res/amir.jpg",' +
    '"hobbies": "משחקי מחשב, כדורגל",' +
    '"about": "ילד תחרותי, אוהב חופש ומרחב"' +
  '}\');'
);

StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "עמרו",' +
    '"lastName" : "כוהן",' +
    '"age" : "6",' +
    '"image": "/res/amro.jpg",' +
    '"hobbies": "כדורגל, ריצה, שחמט",' +
    '"about": "אוהב לשחק עם הכלב"' +
  '}\');'
);
StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "אגם",' +
    '"lastName" : "ספיר",' +
    '"age" : "8",' +
    '"image": "/res/agam.jpg",' +
    '"hobbies": "ריקוד בלט, קריאת סיפורים",' +
    '"about": "ילדה בישנית ומצטיינת בבית ספר "' +
  '}\');'
);
StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "עמית",' +
    '"lastName" : "שי",' +
    '"age" : "10",' +
    '"image": "/res/amit.jpg",' +
    '"hobbies": " משחקי מחשב, ציור",' +
    '"about": "ילד מוכשר ואהוב על חבריו ומשפחתו"' +
  '}\');'
);
StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "מאיה",' +
    '"lastName" : "גוטמן",' +
    '"age" : "8",' +
    '"image": "/res/maia.jpg",' +
    '"hobbies": "ריקוד בלט, קריאת סיפורים",' +
    '"about": "ילדה בישנית ומצטיינת בבית ספר "' +
  '}\');'
);

StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "אמה",' +
    '"lastName" : "גולדברג",' +
    '"age" : "12",' +
    '"image": "/res/emma.jpg",' +
    '"hobbies": "ריקוד בלט, קריאת סיפורים",' +
    '"about": "ילדה בישנית ומצטיינת בבית ספר "' +
  '}\');'
);
StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "نزار",' +
    '"lastName" : "حداد",' +
    '"age" : "12",' +
    '"image": "/res/liron.jpg",' +
    '"hobbies": " משחקי מחשב, ציור",' +
    '"about": "ילד מוכשר ואהוב על חבריו ומשפחתו"' +
  '}\');'
);
StorageUtils.query(
  'insert into students (mentorid, data) values (1, \'' +
  '{ ' +
    '"name" : "אורנה",' +
    '"lastName" : "יאסו",' +
    '"age" : "9",' +
    '"image": "/res/orna.jpg",' +
    '"hobbies": "ריקוד בלט, קריאת סיפורים",' +
    '"about": "ילדה בישנית ומצטיינת בבית ספר "' +
  '}\');'
);

StorageUtils.query(
  'insert into users (name, password, data) values (\'shula\', \'1234\', \'' +
  '{ ' +
    '"firstName" : "שולה",' +
    '"lastName" : "ירושלמית"' +
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
    '"firstName" : "משה",' +
    '"lastName" : "המלך"' +
  '}\') returning *;'
).then((result) => {
    let user = result.rows[0];
    StorageUtils.query(
      'insert into notification_clients (client_id, token) values ($1, \'d_AO6BT-ZrM:APA91bHhMDgsI1zWeBCU8RdbE0JvxF-KqEwHg8_8vYROOy5zHjqjPzQ1d-hKMj4o61SJlUAOTrya0oCfbbP_rWL_pZrsaf_P3nO9Xzlh3yLsMOM577WwST6tYCBLwRnlHUmxALm4SJ-j\');',[user.id]
    );
});

StorageUtils.query(
  'insert into messages (userid, message) values (1, \'' +
  '{ ' +
    '"detials" :{' +
      '"title" : "hi man",' +
      '"body" : "whats up?",' +
      '"sender" : "אמא ואבא"' +
    '},'+
    '"schedule": {'+
      '"date" :  "1490789857517"'+
    '}'+
   '}\');'
);
StorageUtils.query(
  'insert into messages (userid, message) values (1, \'' +
  '{ ' +
    '"detials" :{' +
      '"title" : "hi dude",' +
      '"body" : "how are you?"' +
    '},'+
    '"schedule": {'+
      '"date" :  "1490789857517"'+
    '}'+
   '}\');'
);
StorageUtils.query(
  'insert into messages (userid, message) values (2, \'' +
  '{ ' +
    '"detials" :{' +
      '"title" : "bro",' +
      '"body" : "sup the whack playstation whack?"' +
    '},'+
    '"schedule": {'+
      '"date" :  "1490789857517"'+
    '}'+
   '}\');'
);
StorageUtils.query(
  'insert into messages (userid, message) values (2, \'' +
  '{ ' +
    '"detials" :{' +
      '"title" : "hi man",' +
      '"body" : "whats up?"' +
    '},'+
    '"schedule": {'+
      '"date" :  "1490789857517"'+
    '}'+
   '}\');'
);
StorageUtils.query(
  'insert into messages (userid, message) values (3, \'' +
  '{ ' +
    '"detials" :{' +
      '"title" : "hi man",' +
      '"body" : "whats up?"' +
    '},'+
    '"schedule": {'+
      '"date" :  "1490789857517"'+
    '}'+
   '}\');'
);
