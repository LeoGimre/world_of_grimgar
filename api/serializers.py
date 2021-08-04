from django.db import models
from rest_framework import serializers
from .models import Hero, LoreGroup, LoreUndergroup, Lore, LoreType, Quote

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = (
            "id",
            "name",
            "fantasyclass",
            "lvl",
            "info",
            "player",
            "description",
            "image"
            )

class LoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lore
        fields = (
            "id",
            "name",
            "group",
            "undergroup",
            "description",
            "loretype",
            "image"
        )

class LoreTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoreType
        fields = (
            "id",
            "name",
            "description"
        )

class LoreGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoreGroup
        fields = (
            "id",
            "name",
            "description",
            "type",
            "image"
        )

class LoreUndergroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoreUndergroup
        fields = (
            "id",
            "name",
            "description",
            "group",
            "image"
        )

class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = (
            "id",
            "quote",
            "quoter"
        )