"""
from rest_framework import serializers
from .models import User
from rest_framework.generics import GenericAPIView
from rest_framework import status
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
"""
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework import serializers, generics
from django.utils import timezone


class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'confirm_password')

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password')
        confirm_password = validated_data.pop('confirm_password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


"""
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
        print(username)
        password = attrs.get('password')
        print(password)
        user2 = authenticate(username=username, password=password)
        print(user2)

        if user2 is None:
            raise serializers.ValidationError('Niepoprawne dane logowania.')

        attrs['user23'] = user2
        return attrs
"""
"""
    def validate(self, attrs):
        # pobiera wartość z pól username i password
        username = attrs.get('username')
        password = attrs.get('password')
        try:
            #sprawdzanie czy obiekt istnieje w bazie, jeśli tak, to wrzucamy do słownika cały obiekt
            user2 = User.objects.get(username=username, password=password)
            attrs['user23'] = user2
            return attrs
            # jeśli nie istnieje, to wyrzucamy błąd
        except User.DoesNotExist:
            raise serializers.ValidationError('Niepoprawne dane logowania.')
            """
