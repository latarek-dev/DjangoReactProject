from django.urls import path
from .views import hello
# from .views import register_user
from .views import UserView

urlpatterns = [
    path('hello/', hello),
    path('register/', UserView.as_view())
]
