import json
from django.http import JsonResponse
from django.views import View
from django.contrib.auth import get_user_model, authenticate, login
from rest_framework import generics, status
from .serializers import UserSerializer, UserAdminSerializer
from api.models import Hero
from django.http import HttpResponse
from .permissions import IsAdminSelfOrReadOnly, IsAdminNotSelfOrReadOnly


class Users(generics.ListCreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminSelfOrReadOnly]

    def patch(self, request, *args, **kwargs):
        hero = Hero.objects.get(id=request.data["characters"])
        user = self.get_object()
        if hero in user.heroes():
            user.remove_hero(hero)
        else:
            user.add_hero(hero)
        return HttpResponse("<h1> works<h1>")

class UserAdmin(generics.RetrieveUpdateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserAdminSerializer
    permission_classes = [IsAdminNotSelfOrReadOnly]




class Login(View):
    http_method_names = ["post"]

    def post(self, request):
        user = authenticate(
            request,
            username=request.POST["email"],
            password=request.POST["password"],
        )
        if user is not None:
            login(request, user)
            return JsonResponse(UserSerializer(user).data, status=status.HTTP_200_OK)
        return JsonResponse(
            {"message": "Login failed"}, status=status.HTTP_400_BAD_REQUEST
        )
