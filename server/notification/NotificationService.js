
var firebaseAdmin = require("firebase-admin");
var firebaseAccount = require("./firebase/remember-me-14b4b-firebase-adminsdk-1bm34-0f8eaf572e.json");



class NotificationService {
  constructor() {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(firebaseAccount),
      databaseURL: "https://remember-me-14b4b.firebaseio.com"
    });
  }

  registerClient(clientId, registrationId) {

  }

  async send({clientId, title, body}) {
    var payload = {
      notification: {title, body}
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    firebaseAdmin.messaging().sendToDevice(registrationToken, payload)
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
