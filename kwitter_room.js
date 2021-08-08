var firebaseConfig = {
      apiKey: "AIzaSyBPmBqmNldy5Xuq8yGluAMLFWSWnYZg_Po",
      authDomain: "kwitter-c479f.firebaseapp.com",
      projectId: "kwitter-c479f",
      storageBucket: "kwitter-c479f.appspot.com",
      messagingSenderId: "419459742875",
      appId: "1:419459742875:web:9c19421598396ea6195a3e"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
