
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAGDzCN3wtAgCyLQAxwr1_WX0zUZd3N1yo",
      authDomain: "classtest-11177.firebaseapp.com",
      projectId: "classtest-11177",
      storageBucket: "classtest-11177.appspot.com",
      messagingSenderId: "608415252153",
      appId: "1:608415252153:web:c71e90e5d74d53ec69e568"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name;

    function  addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name"
          });
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 function redirectToRoomName(name){
       localStorage.setItem("room_name" , name);
       window.location="kwitter_page.html";
 }

 function logout(){
      localStorage.removeItem("user name");
      localStorage.removeItem("room name");
      window.location = "index.html" 
 }






















