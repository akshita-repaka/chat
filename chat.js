// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



