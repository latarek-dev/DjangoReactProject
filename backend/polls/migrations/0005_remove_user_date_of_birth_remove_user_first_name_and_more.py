# Generated by Django 4.1.7 on 2023-05-13 18:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0004_user_delete_createaccount'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='date_of_birth',
        ),
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
    ]
