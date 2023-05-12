from django.shortcuts import render
from rest_framework.decorators import api_view
# from rest_framework import generics
from django.http import HttpResponse
from django.http import JsonResponse
from .models import User
from .forms import UserRegistrationForm


# Create your views here.

# class UserView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
def register_user(request):
    form = UserRegistrationForm()

    return render(request, 'register.html', {'form': form})

@api_view(['GET'])
def hello(request):
    data = {
        'message': 'Hello, world!'
    }
    return JsonResponse(data)

# @api_view(['GET'])
# def UserView(request):
#     data = {
#         'username': {User.username},
#         'email' : {User.email},
#         'password' : {User.password},
#         'first_name' : {User.first_name},
#         'last_name': {User.last_name},
#         'date_of_birth': {User.date_of_birth},
#         'created_at' : {User.created_at}
#     }
#     return JsonResponse(data)