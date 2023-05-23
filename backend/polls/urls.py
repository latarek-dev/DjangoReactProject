from django.urls import path
from .views import UserView, UserLoginView, UsersList
from .views import TopHeadlinesView

urlpatterns = [
    path('register/', UserView.as_view()),
    path('list/', UsersList.as_view()),
    path('login/', UserLoginView.as_view()),
    path('top-headlines/', TopHeadlinesView.as_view()),
]
