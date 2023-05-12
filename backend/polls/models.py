from django.db import models


# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50, unique=True, null=False)
    email = models.EmailField(unique=True, null=False)
    password = models.CharField(max_length=50, null=False)
    first_name = models.CharField(max_length=50, null=False)
    last_name= models.CharField(max_length=50, null=True)
    date_of_birth = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    # class Meta:
    #     db_table='polls_user'