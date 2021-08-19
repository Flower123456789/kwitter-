var firebaseConfig = {
    apiKey: "AIzaSyCSR2MxCw6d_buv8JwFAFK0AJLDgP7z7bM",
    authDomain: "kwitter-project-edd5f.firebaseapp.com",
    databaseURL: "https://kwitter-project-edd5f-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-edd5f",
    storageBucket: "kwitter-project-edd5f.appspot.com",
    messagingSenderId: "154367197245",
    appId: "1:154367197245:web:95abd4e49672ccd444aa54"
  };
  firebase.initializeApp(firebaseConfig);
  
  
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send(){
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
     });
     document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();