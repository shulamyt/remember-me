const Storage = require('./UserStorage');
class UserService {
    get() {
        return Storage.get();
    }

    add(user) {
        return Storage.add(user);
    }

    login(user) {
        return new Promise((resolve, reject)=>{
            Storage.getByUserName(user.name).then((fetchedUser)=>{
                if(fetchedUser.pass == user.pass){
                    resolve(fetchedUser);
                }
                else{
                    reject();
                }
            });
        });
        
    }
}
module.exports = new UserService();
