from rest_framework import permissions


class IsAdminSelfOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_staff or obj == request.user


class IsAdminNotSelfOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff and (
            request.method in permissions.SAFE_METHODS or not obj == request.user
        )
