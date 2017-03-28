const StorageUtils = require('./../utils/storage/StorageUtils');
class MessageStorage {

    getByUser(id) {
      console.console.log("get message by user id=" + id);
        return StorageUtils.query('select message from messages where userid=' + id)
                    .then((result) => (result.rows));
    }

    add({userid, message}) {
        return StorageUtils.query('insert into messages (userid, message) values ($1, $2) returning *',
                                    [userid, message])
                            .then((result) => (result.rows[0]));
    }

    update({id, message}) {
        return StorageUtils.query('update messages set message=($1) where id=($2)',
                                    [message, id])
                            .then((result) => (result.rows[0]));
    }

    delete(id) {
        return StorageUtils.query('delete from messages where id=($1)',
                                    [id])
                            .then((result) => (result.rows[0]));
    }
}

module.exports = new MessageStorage();
