const socket = io('http://localhost:8080/');

socket.on("bus-command", function(command) {
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: command}, function(response) {
            console.log(response);
        });
    }); 
});