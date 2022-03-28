//YOUR FIREBASE LINKS
userName = localStorage.getItem('userName');
roomName = localStorage.getItem('roomName');

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

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name1Row = '<h4>' + name1 + '<img class="user-click" style="width: 2em; height:2em;" src="tick.png"></h4>';
messagerow = '<h4>' + message + '</h4>';
likeRow = '<button class="btn btn-danger" id=' +  firebase_message_id + 'value=' + like + ' onclick="updateLike(this.id)">'
spanrow = '<span class="glyphicon glyphicon-thumbs-up">like' + like + '</span></button><hr>';
row = name1Row + messagerow + likeRow + spanrow; 
document.getElementById('output').innerHTML += row;

//End code
      } });  }); }
getData();

userName = localStorage.getItem('userName');
roomName = localStorage.getItem('roomName');

function send() {
      message = document.getElementById('input').value;
      firebase.database().ref(roomName).push({
            name: userName,
            message: message,
            like: 0
      });
      

      document.getElementById('input').value = '';
}
function updateLike(likeID) {
      likeNum = likeID;
      likeNum2 = document.getElementById(likeNum).value;
      likeNum3 = Number(likeNum2) + 1;
      firebase.database().ref(roomName).child(likeNum).update({
            like: likeNum3
      });
}
function logout() {
      localStorage.removeItem('userName');
      localStorage.removeItem('roomName')
      windowd.location = 'index.html';
      
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
let camera = document.getElementById('camera');

function start() {
    document.getElementById('input').innerHTML = '';
    recognition.start();
}

recognition.onresult = (event) => {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById('input').innerHTML = content;
    
}
