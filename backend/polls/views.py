from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import permissions
from rest_framework import views
from rest_framework.response import Response
from . import serializers
from django.contrib.auth import login, logout
from rest_framework import status
from rest_framework.views import APIView
import json
import requests

class TopHeadlinesView(APIView):
    def get(self, request):
        api_key = 'e53df72e27134c8caa54d1591ba1456e'
        country = request.GET.get('country')
        category = request.GET.get('category')
        page_size = 20

        params = {
            'apiKey': api_key,
            'country': country,
            'category': category,
            'pageSize': page_size,
        }
        print(params)

        response = requests.get('https://newsapi.org/v2/top-headlines', params=params)

        data = response.json()

        default_image_url = 'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg'

        if response.status_code == 200:
            articles = data.get('articles', [])
            for article in articles:
                if article["urlToImage"] is None:
                    article["urlToImage"] = default_image_url
        else:
            print('Wystąpił błąd:', response.status_code)

        return Response(data)


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class UserLoginView(generics.GenericAPIView):
    serializer_class = serializers.LoginSerializer

    def post(self, request, format=None):
        serializer = serializers.LoginSerializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'created_at': str(user.date_joined)
        }

        return Response(user_data, status=status.HTTP_202_ACCEPTED)


class UsersList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer