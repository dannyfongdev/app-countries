from django.urls import path

from simple_api.views import json_response, lima, region, name, codes, alpha


urlpatterns = [
    path('name/<name>', name),
    path('region/<region>', region),
    path('alpha/<code>', alpha),
    path('codes/', codes),
    path('lima/', lima),
    path('test/', json_response),
]