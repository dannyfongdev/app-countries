from django.shortcuts import render
from django.http import JsonResponse

from modules.countries_api_local import get_by_capital, get_by_region, get_by_name, get_country_codes, get_by_code

# Create your views here.

def codes(request):
  data = get_country_codes()
  return JsonResponse(data)


def region(request, region):
  data = get_by_region(region)
  return JsonResponse(data)


def name(request, name):
  data = get_by_name(name)
  return JsonResponse(data)


def alpha(request, code):
  data = get_by_code(code)
  return JsonResponse(data)


def lima(request):
  data = get_by_capital('Lima')
  return JsonResponse(data)


# test
def json_response(request):
  # Data
  d = {"message":"Hello JsonResponse"}
  # JsonResponse
  return JsonResponse(d)