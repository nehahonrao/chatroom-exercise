let socket = io.connect();

// client to server

// msg send to all 
document.getElementById('sendToAll').addEventListener('click',function(){
socket.emit('sendToAll', (document.getElementById('message').value))});

//  msg send to u 

document.getElementById('sendToMe').addEventListener('click',function(){
socket.emit('sendToMe',(document.getElementById('message').value))});

 // server to client

 socket.on('displayMessage', (message) => {
 document.getElementById('target').innerHTML += '<br>'+message;
 });