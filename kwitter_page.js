//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDVTIdYAMXv7Xk4jMLLzDAo845PqqPTGjY",
      authDomain: "letschat-b7a4e.firebaseapp.com",
      databaseURL: "https://letschat-b7a4e-default-rtdb.firebaseio.com",
      projectId: "letschat-b7a4e",
      storageBucket: "letschat-b7a4e.appspot.com",
      messagingSenderId: "145849932089",
      appId: "1:145849932089:web:7a5bae61979a462353f0e8"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      username = localStorage.getItem("username")
      room_name= localStorage.getItem("roomName")
      function send(){
            message= document.getElementById("message_input").value;
            firebase.database().ref(room_name).push({
                  msg:message,name:username,like:0
            })
            document.getElementById("message_input").value = "";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomName")
      window.location="index.html"
}
