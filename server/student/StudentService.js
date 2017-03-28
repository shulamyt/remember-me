const Storage = require('./StudnetStorage');
class StudentService {
    getByMentor(mentorId){
        Storage.getByMentor(mentorId).then((fetchedStudents)=>{
                for(var i = 0; i < fetchedStudents.length; i++){
                    let student = fetchedStudents[i];
                    fetchedStudents[i] = Object.assign(student.id, student.mentorid, JSON.parse(student.data));
                }
            });
    }
}

module.exports = new StudentService();