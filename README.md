# Chatbot Django - Proof of Concept

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
   git clone https://github.com/yourusername/django-chatbot.git
   cd django-chatbot

2. **Set Up Django Frontend:**

   ```bash
   pip install -r requirements.txt
   python manage.py migrate

3. **Navigate to the Flask backend directory and install the necessary packages:**

   ```bash
   cd flask_backend
   pip install Flask Flask-SocketIO Flask-CORS

###  Project Structure
- flask_backend/: Contains the Flask application code.
- django_frontend/: Contains the Django application code.
- requirements.txt: Python dependencies for Django.
###  Troubleshooting
- Verify that WebSocket and REST requests are properly routed.
- Ensure that Flask is running on port 5000 and Django is running on port 8000.
- Verify that WebSocket and REST requests are properly routed.
  
###  Running the Application
- Step 1. Start the Flask backend:
   ```bash
   python flask_app.py

- Step 2. Start the Django development server:
  ```bash
  python manage.py runserver

- Step 3. Start Daphne:
 ```bash
 daphne -p 8001 django_frontend.asgi:application
