from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from grimgar_web.views import FrontendAppView, check_url



urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path("", include("frontend.urls")),
    url(r'^', FrontendAppView.as_view()),

]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)