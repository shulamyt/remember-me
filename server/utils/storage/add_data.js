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
  '}\');'
);

StorageUtils.query(
  'insert into users (name, password, data) values (\'moshe\', \'1234\', \'' +
  '{ ' +
    '"name" : "משה",' +
    '"lastName" : "המלך",' +
  '}\');'
);
