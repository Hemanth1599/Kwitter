// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2f3c9Qkyvaam1Lar9yW7sSBtTIjuA6Kk",
  authDomain: "kwitter-ab8bd.firebaseapp.com",
  databaseURL: "https://kwitter-ab8bd-default-rtdb.firebaseio.com",
  projectId: "kwitter-ab8bd",
  storageBucket: "kwitter-ab8bd.appspot.com",
  messagingSenderId: "250757947210",
  appId: "1:250757947210:web:556ec9d4025fe1ee476bb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    room_names = document.getElementById("room_name").value;

    localStorage.setItem("room_name", Room_names);

    firebase.database().ref("/").child(room_names).update({
      purpose : "adding Room name"
});

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name is " + Room_names);
       row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML = row;
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}