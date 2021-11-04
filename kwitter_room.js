const firebaseConfig = {
      apiKey: "AIzaSyALAR5X4zGBvrvd3fCPqXMwYCF6zO7-X2Q",
      authDomain: "project-94-cc853.firebaseapp.com",
      databaseURL: "https://project-94-cc853-default-rtdb.firebaseio.com",
      projectId: "project-94-cc853",
      storageBucket: "project-94-cc853.appspot.com",
      messagingSenderId: "555531074195",
      appId: "1:555531074195:web:738437f6fbae69cbb32b66"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("room_name").value;
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addRoom() {
          Room_names = document.getElementById("room_name").value;

          localStorage.setItem("Roomname" ,Room_names);
          window.location = "kwitter_page.html";
          firebase.database().ref("/").child(Room_names).update({
             purpose: "Adding Room Name"   
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
