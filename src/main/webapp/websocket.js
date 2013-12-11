var wsUri = "ws://" + document.location.host + document.location.pathname + "chat";
var websocket = new WebSocket(wsUri);
var currentUser;
websocket.onerror = function(evt) {
    onError(evt)
};

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

// For testing purposes
var output = document.getElementById("output");
websocket.onopen = function(evt) {
    onOpen(evt)
};
websocket.onmessage = function (evt) {
  onMessage(evt)  
};

function onMessage(evt) {
    writeToScreen(evt.data);
}
function writeToScreen(message) {
    output.innerHTML += message + "<br>";
}

function onOpen() {
    //writeToScreen("Connected to " + wsUri);
}
// End test functions

function sendMessage() {
    var userMsg = chat_user_msg.value;
    websocket.send(currentUser + " : " + userMsg);
}
function joinChat() {
    currentUser = chat_user_name.value;
    console.log("Paramare " + currentUser);
    websocket.send(currentUser + " joined chat");
}