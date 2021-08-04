from django.urls import path
from .views import Users, UserDetail, UserAdmin

urlpatterns = [
    path("", Users.as_view(), name="users"),
    path("<int:pk>/", UserDetail.as_view(), name="user_detail"),
    path("<int:pk>/admin/", UserAdmin.as_view(), name="user_admin"),
]
