from django.urls import path
from .views import UserView #,UsersList, UserLoginView


urlpatterns = [
    path('register/', UserView.as_view()),
    #path('list/', UsersList.as_view()),
    #path('login/', UserLoginView.as_view())
]
