var wsUri = "ws://" + document.location.host + document.location.pathname + "sayhello";
var websocket = new WebSocket(wsUri);

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
    writeToScreen("The server says... " + evt.data);
}
function writeToScreen(message) {
    output.innerHTML += message + "<br>";
}

function onOpen() {
    writeToScreen("Connected to " + wsUri);
}
// End test functions

function sendMessage() {
    websocket.send("Hi there to server...");
}