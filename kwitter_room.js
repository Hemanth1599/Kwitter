
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB2f3c9Qkyvaam1Lar9yW7sSBtTIjuA6Kk",
      authDomain: "kwitter-ab8bd.firebaseapp.com",
      projectId: "kwitter-ab8bd",
      storageBucket: "kwitter-ab8bd.appspot.com",
      messagingSenderId: "250757947210",
      appId: "1:250757947210:web:556ec9d4025fe1ee476bb3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
