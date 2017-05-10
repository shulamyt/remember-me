const Storage = require('./UserStorage');
class UserService {
    get() {
        return new Promise((resolve, reject)=>{
            Storage.get().then((fetchedUsers)=>{
                    for(var i = 0; i < fetchedUsers.length; i++){
                        let user = fetchedUsers[i];
                        if(user.data === undefined || user.data === null){
                            continue;
                        }
                        var userData;
                        try{
                            userData = JSON.parse(user.data);
                        }
                        catch(error){
                            reject("failed to parse user data " + user.data);
                        }

                        fetchedUsers[i] = Object.assign(
                            {id: user.id,
                            name:user.name}, 
                            userData);
                    }
                    resolve(fetchedUsers);
            });
        });
    }

    add(user) {
        return Storage.add(user);
    }

    login(user) {
        return new Promise((resolve, reject)=>{
            Storage.getByUserName(user.name).then((fetchedUser)=>{
                if(fetchedUser.password == user.password){
                    if(fetchedUser.data === undefined || fetchedUser.data === null){
                        resolve(fetchedUser);
                    }
                    var userData;
                    try{
                         userData = JSON.parse(fetchedUser.data);
                    }
                    catch(error){
                        reject("failed to parse user data " + fetchedUser.data);
                    }
                    
                    fetchedUser = Object.assign(
                        {
                        id: fetchedUser.id,
                        name: fetchedUser.name,
                        password: fetchedUser.password},
                        userData);
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
