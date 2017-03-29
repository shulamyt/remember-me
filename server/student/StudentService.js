const Storage = require('./StudentStorage');
class StudentService {
    getByMentor(mentorId){
        return new Promise((resolve, reject)=>{
            Storage.getByMentor(mentorId).then((fetchedStudents)=>{
                    for(var i = 0; i < fetchedStudents.length; i++){
                        let student = fetchedStudents[i];
                        if(student.data === undefined || student.data === null){
                            continue;
                        }
                        var studentData;
                        try{
                            studentData = JSON.parse(student.data);
                        }
                        catch(error){
                            reject("failed to parse student data " + student.data);
                        }
                        fetchedStudents[i] = Object.assign(
                            {id: student.id, 
                            mentorId: student.mentorid}, 
                            studentData);
                    }
                    resolve(fetchedStudents);
            });
        });
    }
}

module.exports = new StudentService();