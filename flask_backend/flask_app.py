from flask import Flask, request, jsonify
from flask_socketio import SocketIO, send
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

# REST API endpoint
@app.route('/handle_message', methods=['POST'])
def handle_message():
    data = request.json
    message = data.get('message', '')

    # Process the message and create a response
    response_message = f"Bot: {message[::-1]}"  # Example response

    return jsonify({'response': response_message})

# WebSocket event handlers
@socketio.on('message')
def handle_message_websocket(msg):
    print(f"Received message: {msg}")
    send(f"Bot: {msg[::-1]}", broadcast=True)

if __name__ == '__main__':
    # Run the Flask app with SocketIO support
    socketio.run(app, port=5000, debug=True)
