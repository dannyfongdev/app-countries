from django.urls import path

from simple_api.views import json_response, lima, region


urlpatterns = [
    path('region/', region),
    path('lima/', lima),
    path('test/', json_response),
]