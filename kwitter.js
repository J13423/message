function addUser() {
    userName = document.getElementById('userName').value;
    localStorage.setItem('userName', userName);
    document.getElementById('userName').innerHTML = userName;
    window.location = 'kwitter_room.html';

}