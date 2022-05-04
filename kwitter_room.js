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
    document.getElementById("display_wel").innerHTML = "Welcome " + username+ " !";
    
    function add_room(){
          roomName = document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomName).update({
                purpose:"adding room name"
          })
          localStorage.setItem("roomName",roomName);
          document.getElementById("room_name").value ="";
          window.location = "kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log(Room_names);
          row = "<div class='room_name' id='"+ Room_names + "' onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>"
          document.getElementById("output").innerHTML += row;
    
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name", name)
          window.location = "kwitter.page.html";
    
    }
    
    function logout(){
          localStorage.removeItem("username");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    } 
  