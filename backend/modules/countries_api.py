import requests


def get_country_codes():
    url = "https://restcountries.com/v3.1/all?fields=name,cca3"
    response = requests.get(url)
    data = response.json()
    return transform_codes(data)


def get_by_region(region='Americas'):
    url = f"https://restcountries.com/v3.1/region/{region}"
    response = requests.get(url)
    data = response.json()
    return transform_data(data)


def get_by_name(name='peru'):
    url = f"https://restcountries.com/v3.1/name/{name}"
    response = requests.get(url)
    data = response.json()
    return transform_data(data)


def get_by_code(code='usa'):
    url = f"https://restcountries.com/v3.1/alpha/{code}"
    response = requests.get(url)
    data = response.json()
    return transform_data(data)


def get_by_capital(capital='lima'):
    url = f"https://restcountries.com/v3.1/capital/{capital}"
    response = requests.get(url)
    data = response.json()
    return transform_data(data)


# utilities

# takes api data and makes simpler dictionary
def transform_data(data):
    simple_list = []
    for item in data:
      simple_list.append(transform_one(item))
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