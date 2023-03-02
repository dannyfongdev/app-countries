# example/views.py
from datetime import datetime

from django.http import HttpResponse

from modules.age_user_api import guess_age


def index(request):
    now = datetime.now()
    first_name = 'Marsha'
    html = f'''
    <html>
        <body>
            <h1>Hello from Vercel!</h1>
            <p>The current time is { now }.</p>
            <p>I think { first_name } is { guess_age(first_name) } years old.</p>
            
        </body>
    </html>
    '''
    return HttpResponse(html)

