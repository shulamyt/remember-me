const StorageUtils = require('./../utils/storage/StorageUtils');
class StudentStorage {

    getByMentor(mentorId){
        return StorageUtils.query('SELECT * FROM  students where mentorid=$1',[new Number(mentorId)])
                    .then((result) => (result.rows));
    }
}

module.exports = new StudentStorage();