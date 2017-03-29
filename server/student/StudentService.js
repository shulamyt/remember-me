const Storage = require('./StudentStorage');
class StudentService {
    getByMentor(mentorId){
        return new Promise((resolve, reject)=>{
            Storage.getByMentor(mentorId).then((fetchedStudents)=>{
                    for(var i = 0; i < fetchedStudents.length; i++){
                        let student = fetchedStudents[i];
                        fetchedStudents[i] = Object.assign({id: student.id, mentorId: student.mentorid}, 
                            JSON.parse(student.data));
                    }
                    resolve(fetchedStudents);
            });
        });
    }
}

module.exports = new StudentService();