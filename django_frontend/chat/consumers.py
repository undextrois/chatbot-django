# In chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
import httpx

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Direct asynchronous call to an API or processing logic
        async with httpx.AsyncClient() as client:
            response = await client.post('http://127.0.0.1:5000/handle_message', json={'message': message})
            response_data = response.json()

        # Extract just the bot's response message
        response_message = response_data.get('response', '')

        # Send the response back to the WebSocket
        await self.send(text_data=json.dumps({
            'message': response_message
        }))
