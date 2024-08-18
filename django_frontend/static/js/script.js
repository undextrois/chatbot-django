document.addEventListener('DOMContentLoaded', function() {
    const chatSocket = new WebSocket('ws://127.0.0.1:8001/ws/chat/');

    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');

    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        const p = document.createElement('p');
        p.innerText = data.message;
        messages.appendChild(p);
        messages.scrollTop = messages.scrollHeight;
        console.log("Message from server ", data.message);
    };

    sendBtn.onclick = function() {
        const msg = messageInput.value;
        if (msg) {
            chatSocket.send(JSON.stringify({ 'message': msg }));
            messageInput.value = '';
        }
    };

    chatSocket.onopen = function(e) {
        console.log("[open] Connection established");
    };

    chatSocket.onclose = function(event) {
        if (event.wasClean) {
            console.log(`[close] Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
        } else {
            console.error(`[close] Connection died`);
        }
    };

    chatSocket.onerror = function(error) {
        console.error(`[error] ${error.message}`);
    };

    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
});
