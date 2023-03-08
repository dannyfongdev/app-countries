# This is a drop-in replacement for countries_api.py
# The restcountries.com api was running very poorly, non-usable.

import requests
import json

# all.json is the data from restcountries.com as of 3/4/2023
f = open('modules/all.json', encoding="utf8")

DATA = json.load(f)


def get_country_codes():
    return transform_codes(DATA)


def get_by_region(region='Americas'):
    data = [i for i in DATA if i.get('region')==region]
    return transform_data(data)


def get_by_name(name='Peru'):
    data = [i for i in DATA if i.get('name') and name.upper() in i['name']['common'].upper()]
    return transform_data(data)


def get_by_code(code='USA'):
    data = [i for i in DATA if i.get('cca3')==code]
    return transform_data(data)


# used for testing, hard-coded to "lima"
def get_by_capital(capital='Lima'):
    data = [i for i in DATA if i.get('capital') and i['capital'][0]=='Lima']
    return transform_data(data)


# utilities

# takes api data and makes simpler dictionary
def transform_data(data):
    simple_list = []
    for item in data:
      simple_list.append(transform_one(item))
    # sort by name
    simple_list.sort(key=lambda x: x.get('name'))
    # wrap list into a dictionary, JsonResponse can only take dictionaries
    return { 'list': simple_list }


def transform_one(item):
    simple_item = {}
    simple_item['cca3'] = item.get('cca3')
    simple_item['name'] = item.get('name').get('common')
    simple_item['flag'] = item.get('flags').get('png')
    simple_item['population'] = item.get('population')
    simple_item['region'] = item.get('region')
    simple_item['subregion'] = item.get('subregion')
    simple_item['capital'] = item.get('capital')
    simple_item['languages'] = transform_languages(item.get('languages'))
    simple_item['currencies'] = transform_currencies(item.get('currencies'))
    simple_item['tld'] = item.get('tld')
    simple_item['borders'] = item.get('borders')
    simple_item['nativeName'] = transform_native_names(item.get('name').get('nativeName'))
    return simple_item


def transform_codes(data):
    simple_list = []
    for item in data:
        simple_list.append({item.get('cca3'): item.get('name').get('common')})
    return { 'list' : simple_list }


def transform_languages(data):
    simple_list = []
    for item in data.values():
        simple_list.append(item)
    separator = ", "
    return separator.join(simple_list)


def transform_currencies(data):
    simple_list = []
    for item in data.values():
        simple_list.append(item.get('name'))
    separator = ", "
    return separator.join(simple_list)


def transform_native_names(data):
    simple_list = []
    for item in data.values():
        simple_list.append(item.get('common'))
    separator = ", "
    return separator.join(simple_list)


