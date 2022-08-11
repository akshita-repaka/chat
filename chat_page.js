
const firebaseConfig = {
    apiKey: "AIzaSyALKYSq5TV7XvZ4apmezmvQ_gJ394htOig",
    authDomain: "lets-chat-936ad.firebaseapp.com",
    databaseURL: "https://lets-chat-936ad-default-rtdb.firebaseio.com",
    projectId: "lets-chat-936ad",
    storageBucket: "lets-chat-936ad.appspot.com",
    messagingSenderId: "503898475364",
    appId: "1:503898475364:web:a5bc915b510e46ffa04871"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    
//End code
 } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}






