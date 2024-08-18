# urls.py
# chat/urls.py

from django.urls import path
from . import views

#urlpatterns = [
 #   path('', views.index, name='index'),
#]

urlpatterns = [
    path('', views.chatbot_ui, name='chatbot_ui'),
]