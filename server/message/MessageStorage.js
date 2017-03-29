const StorageUtils = require('./../utils/storage/StorageUtils');
class MessageStorage {

    getByUser(id) {
        return StorageUtils.query('select * from messages where userid=$1', [new Number(id)])
                    .then((result) => (result.rows));
    }

    get(id) {
      return StorageUtils.query('select * from messages where id=$1', [new Number(id)])
                  .then((result) => (result.rows[0]));
    }

    add({userid, message}) {
        return StorageUtils.query('insert into messages (userid, message) values ($1, $2) returning *',
                                    [userid, message])
                            .then((result) => (result.rows[0]));
    }

    update({messageid, message}) {
        return StorageUtils.query('update messages set message=($1) where id=($2)',
                                    [message, messageid])
                            .then((result) => (result));
    }

    delete(messageid) {
        return StorageUtils.query('delete from messages where id=($1)',
                                    [messageid])
                            .then((result) => (result));
    }
}

module.exports = new MessageStorage();
