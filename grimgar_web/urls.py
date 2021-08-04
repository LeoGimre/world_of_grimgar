from typing import Tuple
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from grimgar_web.views import FrontendAppView
from accounts.views import Login

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/account/", include("accounts.urls")),
    path("api/login/", Login.as_view(), name="login"),
    path("api/", include("api.urls")),
    path("", include("frontend.urls")),
    url(r'^', FrontendAppView.as_view()),
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
]

if False:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)