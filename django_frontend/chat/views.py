from django.shortcuts import render

# Create your views here.
# chat/views.py

from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the chat index.")



def chatbot_ui(request):
    return render(request, 'index.html')