from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from django.http import HttpResponse
from django.http import JsonResponse
from .models import User
from .serializers import UserSerializer



# Create your views here.

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def perform_create(self, serializer):
        serializer.is_valid(raise_exception=True)
        serializer.save()


class UsersList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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