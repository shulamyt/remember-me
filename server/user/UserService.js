const Storage = require('./UserStorage');
class UserService {
    get() {
        return new Promise((resolve, reject)=>{
            Storage.get().then((fetchedUsers)=>{
                    for(var i = 0; i < fetchedUsers.length; i++){
                        let user = fetchedUsers[i];
                        fetchedUsers[i] = Object.assign(
                            {id: user.id,
                            name:user.name}, 
                            JSON.parse(user.data));
                    }
                    resolve(fetchedUsers);
            });
        });
        return Storage.get();
    }

    add(user) {
        return Storage.add(user);
    }

    login(user) {
        return new Promise((resolve, reject)=>{
            Storage.getByUserName(user.name).then((fetchedUser)=>{
                if(fetchedUser.password == user.password){
                    let temp = JSON.parse(fetchedUser.data);
                    fetchedUser = Object.assign(
                        {
                        id: fetchedUser.id,
                        name: fetchedUser.name,
                        password: fetchedUser.password},
                        JSON.parse(fetchedUser.data));
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
