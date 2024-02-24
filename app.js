// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNrI34rs5w2UD_C1GzYnYnDtgbw4W8r4E",
  authDomain: "authentication-50ab8.firebaseapp.com",
  databaseURL: "https://authentication-50ab8-default-rtdb.firebaseio.com",
  projectId: "authentication-50ab8",
  storageBucket: "authentication-50ab8.appspot.com",
  messagingSenderId: "760013774004",
  appId: "1:760013774004:web:499d0db962bd8b98c70be1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

$(document).ready(function() {
    $('#subscribeForm').submit(function(e) {
        e.preventDefault();

        const email = $('#email').val();
        
        // Add a new document with a generated id
        db.collection("subscribers").add({
            email: email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {
            $('#email').val(''); // Clear the input field
            $('#successMessage').fadeIn(600).delay(2000).fadeOut(600); // Show success message with fade effect
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });
});
