var firebaseConfig = {
      apiKey: "AIzaSyA07NJBwitGZHSb8CuMvC0oHZwq5Gs81zM",
      authDomain: "whitehat-b14ca.firebaseapp.com",
      databaseURL: "https://whitehat-b14ca-default-rtdb.firebaseio.com",
      projectId: "whitehat-b14ca",
      storageBucket: "whitehat-b14ca.appspot.com",
      messagingSenderId: "293233018256",
      appId: "1:293233018256:web:e1692146288910699d1f15"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome:"+user_name;

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      console.log("room_name in addRoom"+room_name);
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div></hr>";
      document.getElementById("output").innerHTML+=row;
       //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

