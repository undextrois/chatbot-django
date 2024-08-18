document.addEventListener('DOMContentLoaded', function() {
    //const chatSocket = new WebSocket('ws://' + window.location.host + '/ws/chat/');
    const chatSocket  = new WebSocket('ws://localhost:8000/ws/chat/');

    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');

    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        const p = document.createElement('p');
        p.innerText = data.message;
        messages.appendChild(p);
        messages.scrollTop = messages.scrollHeight;
    };

    sendBtn.onclick = function() {
        const msg = messageInput.value;
        if (msg) {
            chatSocket.send(JSON.stringify({ 'message': msg }));
            messageInput.value = '';
        }
    };

    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
});
