from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.conf import settings



class User(AbstractUser):
    email = models.EmailField(_("email address"), unique=True)
    name = models.CharField(_("name"), max_length=150)

    def __str__(self):
        return self.name

    def add_hero(self, hero):
        self.heroes.add(hero)

    def remove_hero(self, hero):
        self.heroes.remove(hero)

    def get_heroes(self):
        return self.heroes.all()




    