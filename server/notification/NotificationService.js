
const firebaseAdmin = require("firebase-admin");
const firebaseAccount = require("./firebase/remember-me-14b4b-firebase-adminsdk-1bm34-0f8eaf572e.json");
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

  registerClient(clientId, token) {
      clientStorage.add({clientId, token})
  }

  async send({clientId, title, body}) {
    var payload = {
      notification: {title, body}
    };

    const client = clientStorage.get(clientId);

    if(!client) {
        throw new Error('client ${clientId} not registered!');
    }

    // Send a message to the device corresponding to the provided
    // registration token.
    firebaseAdmin.messaging().sendToDevice(client.token, payload)
    .then(function(response) {
      console.log("Successfully sent message:", response);
      return response;
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
      throw error;
    });
  }
}

module.exports = new NotificationService();
