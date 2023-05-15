from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import permissions
from rest_framework import views
from rest_framework.response import Response
from . import serializers
from django.contrib.auth import login, logout
from rest_framework import status
from rest_framework.views import APIView


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (permissions.AllowAny,)


class UserLoginView(APIView):
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = serializers.LoginSerializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)

        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'password': user.password,
            'created_at': str(user.date_joined)
        }

        return Response(user_data, status=status.HTTP_202_ACCEPTED)
        

class LogoutView(views.APIView):

    def post(self, request, format=None):
        logout(request)
        return Response({'success': 'Logged out successfully'}, status=status.HTTP_204_NO_CONTENT)


class UsersList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer