from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

"""from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .serializers import UserLoginSerializer
from django.http import JsonResponse
from .models import User
from django.contrib.auth import authenticate, login
from rest_framework.response import Response

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

class UserLoginView(GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user_instance = serializer.validated_data['user23']
        login(request, user)

        user_data = {
            'id': user_instance.id,
            'username': user_instance.username,
            'email': user_instance.email,
            'password': user_instance.password,
            'created_at': str(user_instance.created_at)
        }

        return Response(user_data, status=status.HTTP_200_OK)
        """
"""
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user_instance = serializer.validated_data['user23']
        user_data = {
            'id': user_instance.id,
            'username': user_instance.username,
            'email': user_instance.email,
            'password': user_instance.password,
            'created_at': str(user_instance.created_at)
        }

        return JsonResponse(user_data, status=status.HTTP_200_OK)

    """