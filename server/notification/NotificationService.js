
const firebaseAdmin = require("firebase-admin");
const firebaseAccount = require("./firebase/key/remember-me-14b4b-firebase-adminsdk-1bm34-0f8eaf572e.json");
const clientStorage = require("./ClientStorage");

class NotificationService {
  constructor() {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(firebaseAccount),
      databaseURL: "https://remember-me-14b4b.firebaseio.com"
    });
  }

  getClients() {
      return clientStorage.get();
  }

  registerClient({clientId, token}) {
      clientStorage.getById(clientId).then((client) => {
          if(typeof client === 'undefined' || client === null) {
              return clientStorage.add({clientId, token});
          }else{
              return clientStorage.update({clientId, token});
          }
      })

  }

  send({clientId, notification}) {
    var payload = {
      notification: notification
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    return new Promise((resolve, reject) => {
        clientStorage.getById(clientId).then((client) => {
            if(typeof client === 'undefined' || client === null) {
                reject('client ${clientId} not registered');
            }

            firebaseAdmin.messaging().sendToDevice(client.token, payload)
            .then(function(response) {
              console.log("Successfully sent message:", response);
              resolve(response);
            })
            .catch(function(error) {
              console.log("Error sending message:", error);
              reject(error);
            });
        });
    });

  }
}

module.exports = new NotificationService();
