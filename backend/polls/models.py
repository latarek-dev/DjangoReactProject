from django.db import models


class NotesList(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return "List: {}".fomrat(self.name)
    
class Note(models.Model):
    title = models.CharField(max_length=50)
    value = models.CharField(blank=True)
    date = models.CharField(max_length=10)
    location = models.CharField()


    def __str__(self):
        return self