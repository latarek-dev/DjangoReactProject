from django.db import models
from django.core.exceptions import ValidationError


# Create your models here.
    
"""
class User(models.Model):
    username = models.CharField(max_length=50, unique=True, null=False)
    email = models.EmailField(unique=True, null=False)
    password = models.CharField(max_length=50, null=False)
    confirm_password = models.CharField(max_length=50, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    """
