const Storage = require('./MentorStorage');
class MentorService {
    getMentor(mentorId){
        return new Promise((resolve, reject)=>{
            Storage.getMentor(mentorId).then((fetchedMentor)=>{
                    let student = fetchedStudents[i];
                    if(mentor.data === undefined || mentor.data === null){
                        continue;
                    }
                    var mentorData;
                    try{
                        mentorData = JSON.parse(mentor.data);
                    }
                    catch(error){
                        reject("failed to parse mentor data " + mentor.data);
                    }
                    fetchedMentors[i] = Object.assign(
                        {id: mentor.id, 
                        mentorId: mentor.mentorid}, 
                        mentorData);
                    resolve(fetchedMentors);
            });
        });
    }
}

module.exports = new MentorService();