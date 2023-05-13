from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'confirm_password','first_name','last_name','date_of_birth','created_at')
    
    # password = User.password
    # confirm_password = User.confirm_password

    def validate(self, attrs):
        attrs.get('password')
        attrs.get('confirm_password')
        if (attrs['password'] != attrs['confirm_password']):
            raise serializers.ValidationError("Password are not matching.")
        else:
            return attrs