from django.conf.urls import url
# from django.urls import path

from . import views

urlpatterns = [
    url('depan/',views.depan),
    url('back/',views.back),
    # path('css/kartu.css', views.css_renderer),
]
