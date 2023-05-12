from django.urls import path
from .views import hello
from .views import register_user

urlpatterns = [
    path('hello/', hello),
    path('register/', register_user)
]
