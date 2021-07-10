from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("people", index),
    path("knowledge", index),
    path("rule", index),
    path("player", index),
    path("item", index),
    path("new", index),

    path("knowledge/<int:id>", index),
    path("knowledge/group/<int:id>", index),

    path("people/<int:id>", index),
    path("people/group/<int:id>", index),
    path("people/group/undergroup/<int:id>", index),

    path("rule/<int:id>", index),

    path("log/<int:id>", index),

    path("item/<int:id>", index),
    path("item/group/<int:id>", index),
]