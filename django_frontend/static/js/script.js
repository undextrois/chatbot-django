document.addEventListener('DOMContentLoaded', function() {
    const chatSocket = new WebSocket('ws://127.0.0.1:8001/ws/chat/');

    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');

    function createMessageBubble(content, type) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        const p = document.createElement('p');
        p.innerText = content;
        messageElement.appendChild(p);
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }

    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        createMessageBubble(data.message, 'incoming');
        console.log("Message from server: ", data.message);
    };

    sendBtn.onclick = function() {
        const msg = messageInput.value;
        if (msg) {
            createMessageBubble(msg, 'outgoing');
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
