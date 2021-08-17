//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyAkN5os2IuJc7s5wOGxWxivpYA4hJnKWaQ",
      authDomain: "test-2-f3c9d.firebaseapp.com",
      databaseURL: "https://test-2-f3c9d-default-rtdb.firebaseio.com",
      projectId: "test-2-f3c9d",
      storageBucket: "test-2-f3c9d.appspot.com",
      messagingSenderId: "371219130015",
      appId: "1:371219130015:web:e744ffaca9ec8ea219e4aa"
    };
    
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
//Start code

//End code
      } });  }); }
getData();
