from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class UserRegistrationForm(UserCreationForm):
    username = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    password = forms.CharField(required=True)
    first_name = forms.CharField(required=True)
    last_name= forms.CharField(required=False)
    date_of_birth = forms.DateField(required=True)
    created_at = forms.DateTimeField(required=False)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', 'first_name', 'last_name', 'date_of_birth', 'created_at')