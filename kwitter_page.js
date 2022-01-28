//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
  
function sen(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value = "";
}