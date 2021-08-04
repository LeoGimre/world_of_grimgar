from django.contrib.auth import get_user_model
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "name",
            "email",
            "password",
            "is_staff"
            ##"heroes"
        )
        read_only_fields = ["id", "is_staff"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            **validated_data, username=validated_data["email"]
        )
        user.save()
        return user


class UserAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "name",
            "email",
            "is_staff",
        )
        read_only_fields = ["id", "email"]

