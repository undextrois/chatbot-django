# Chatbot Project

This project integrates a Django frontend with WebSocket support using Django Channels, and a Flask backend that handles both REST API requests and WebSocket connections. 

## Overview

- **Frontend**: Django with Channels for WebSocket communication.
- **Backend**: Flask handling both REST API and WebSocket connections.
- **WebSocket Communication**: Real-time chat between Django and Flask.
- **REST API**: Process messages and return responses.

## Getting Started

### Prerequisites

Ensure you have Python 3.11 or later installed. You will also need the following Python packages:

- Django
- Channels
- Flask
- Flask-SocketIO
- Flask-CORS
- httpx (for async HTTP requests in Django)
- Daphne (ASGI server)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/chatbot-project.git
   cd chatbot-project
