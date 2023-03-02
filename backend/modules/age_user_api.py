# this is for testing

import requests

def guess_age(first_name):
    url = f"https://api.agify.io/?name={first_name}"
    response = requests.get(url)
    data = response.json()
    return data.get('age')


def get_random_person():
    url = "https://randomuser.me/api/"
    response = requests.get(url)
    data = response.json()
    name = data['results'][0]['name']['first']
    img = data['results'][0]['picture']['thumbnail']
    return {'name': name, 'img': img}
    