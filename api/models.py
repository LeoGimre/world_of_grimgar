from accounts.models import User
from django.db import models

class LoreType(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=10000)

    def __str__(self):
        return self.name

class LoreGroup(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=10000)
    type = models.ForeignKey(
        LoreType, null=False, blank=False, on_delete=models.CASCADE)

    image = models.ImageField(upload_to="frontend/static/images/loregroup/")

    def __str__(self):
        return self.name

    def get_object(self):
        return self.model.objects.get(pk=self.type)

class LoreUndergroup(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=10000)
    group = models.ForeignKey(
        LoreGroup, null=False, blank=False, on_delete=models.CASCADE
    )

    image = models.ImageField(upload_to="frontend/static/images/loreundergroup/")

    def __str__(self):
        return self.name

class Lore(models.Model):
    name = models.CharField(max_length=50)

    group = models.ForeignKey(
        LoreGroup, null=True, blank=True, on_delete=models.CASCADE
    )
    undergroup = models.ForeignKey(
        LoreUndergroup, null=True, blank=True, on_delete=models.CASCADE
    )
    
    description = models.TextField(max_length=10000)

    loretype = models.ForeignKey(
        LoreType, null=False, blank=False, on_delete=models.CASCADE
    )

    image = models.ImageField(upload_to="frontend/static/images/lore/")

    def __str__(self):
        return self.name

class Hero(models.Model):
    name = models.CharField(max_length=50)
    fantasyclass = models.CharField(max_length=50)
    lvl = models.IntegerField()
    info = models.TextField(max_length=10000)
    player = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    description = models.TextField(max_length=10000)
    image = models.ImageField(upload_to="frontend/static/images/hero/", null=True)


    def __str__(self):
        return self.name

class Quote(models.Model):
    quote = models.CharField(max_length=50)
    quoter = models.CharField(max_length=10)