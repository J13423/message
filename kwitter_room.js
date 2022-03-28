

const firebaseConfig = {
      apiKey: "AIzaSyBj3X0yP19cA8Y1KwZKuP_CapjLYk2Ce38",
      authDomain: "kwitter-99252.firebaseapp.com",
      databaseURL: "https://kwitter-99252-default-rtdb.firebaseio.com",
      projectId: "kwitter-99252",
      storageBucket: "kwitter-99252.appspot.com",
      messagingSenderId: "607802938860",
      appId: "1:607802938860:web:a875a3b830ffa2a236dcc9"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
userName = localStorage.getItem('userName');
function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
      //Start code

      //End code
      });});}
getData();
userName = localStorage.getItem('userName');
document.getElementById('userName').innerHTML = 'welcome ' + userName;
function addRoom() {
      roomName = document.getElementById('roomName').value;
      firebase.database().ref('/').child(roomName).update({purpose:'adding_room_name'});
      localStorage.setItem('roomName', roomName);
      window.location = 'kwitter_page.html';
}
function logout() {
      localStorage.removeItem('userName');
      localStorage.removeItem('roomName')
      windowd.location = 'index.html';
      
}