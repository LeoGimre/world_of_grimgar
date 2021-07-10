from rest_framework import serializers
from .models import Hero, LoreGroup, LoreUndergroup, Player, Lore, LoreType

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
        )

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = (
            "id",
            "name",
            "password"
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