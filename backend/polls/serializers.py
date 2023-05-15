from rest_framework import serializers
from .models import User
from rest_framework.authentication import authenticate
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from django.http import JsonResponse
import json
from rest_framework import status


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'confirm_password','created_at')
    
    # password = User.password
    # confirm_password = User.confirm_password

    def validate(self, attrs):
        attrs.get('password')
        attrs.get('confirm_password')
        if (attrs['password'] != attrs['confirm_password']):
            raise serializers.ValidationError("Password are not matching.")
        else:
            return attrs

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        # user = authenticate(username=username)
        # print("user1: ",user)
        try:
            user2 = User.objects.get(username=username, password=password)
            user_data={
            'id': user2.id,
            'username': user2.username,
            'email': user2.email,
            'password':user2.password,
            'created_at': str(user2.created_at)
            }

            attrs['user23'] = user2
            return attrs
        
        except User.DoesNotExist:
            raise serializers.ValidationError('Niepoprawne dane logowania.')
