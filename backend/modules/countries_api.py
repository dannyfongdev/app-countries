import requests


def get_by_capital(capital):
    url = f"https://restcountries.com/v3.1/capital/{capital}"
    response = requests.get(url)
    data = response.json()
    return transform_data(data)


def get_by_region(region='Americas'):
    url = f"https://restcountries.com/v3.1/region/{region}"
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
    return { 'data': simple_list }


def transform_one(item):
    simple_item = {}
    simple_item['cca3'] = item.get('cca3')
    simple_item['name'] = item.get('name').get('common')
    simple_item['flag'] = item.get('flags').get('png')
    simple_item['population'] = item.get('population')
    simple_item['region'] = item.get('region')
    simple_item['subregion'] = item.get('subregion')
    simple_item['capital'] = item.get('capital')[0]
    simple_item['languages'] = item.get('languages')
    simple_item['currencies'] = item.get('currencies')
    simple_item['tld'] = item.get('tld')
    # use the first nativeName
    native_names = item.get('name').get('nativeName')
    first_native_name = next(iter(native_names.values()))
    simple_item['nativeName'] = first_native_name.get('common')

    return simple_item

