from django.shortcuts import render
from django.http import JsonResponse

from modules.countries_api import get_by_capital, get_by_region

# Create your views here.
def lima(request):
  data = get_by_capital('Lima')
  return JsonResponse(data)


def region(request):
  data = get_by_region()
  return JsonResponse(data)


# test
def json_response(request):
  # Data
  d = {"message":"Hello JsonResponse"}
  # JsonResponse
  return JsonResponse(d)