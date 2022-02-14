var firebaseConfig = {
    apiKey: "AIzaSyC-0hdjGNvkAq1IO2LM_2cUxO-NIsBaj7I",
    authDomain: "chatter-53f93.firebaseapp.com",
    databaseURL: "https://chatter-53f93-default-rtdb.firebaseio.com",
    projectId: "chatter-53f93",
    storageBucket: "chatter-53f93.appspot.com",
    messagingSenderId: "966064531665",
    appId: "1:966064531665:web:dada563a137758ee523df0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome" + user_name +"!";

  function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
    })
    localStorage.setItem("room_name",room_name);
         window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room name-"+Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;

 //End code
 });});}
getData();
function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="chat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="login.html";
}

