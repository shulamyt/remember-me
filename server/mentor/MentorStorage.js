const StorageUtils = require('./../utils/storage/StorageUtils');
class MentorStorage {

    getMentor(mentorId){
        return StorageUtils.query('SELECT * FROM  mentors where mentorid=$1',[new Number(mentorId)])
                    .then((result) => (result.rows));
    }
}

module.exports = new MentorStorage();