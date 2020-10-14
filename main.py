import requests
import json
import sqlite3
from flask import Flask, render_template

app = Flask(__name__)


# Set API Parameters
api_key = "fe7f423c0bad9cb271b62a2088df97d9"
lat = "48.208176"
lon = "16.373819"
url = "https://api.openweathermap.org/data/2.5/onecall?lat=%s&lon=%s&appid=%s&units=metric" % (lat, lon, api_key)

# Get data and convert from json to python dictionary
response = requests.get(url)
data = json.loads(response.text)

current = data["current"]["dt"]


# Route and render template
@app.route('/')
def index():
    return render_template('dashboard.html', data=data)


@app.route('/test')
def test():
    return render_template('test.html')


# To extract the current temperature from the above call, simply access the JSON result
# current = data["current"]["dt"]
# print(current)
# 5.25

# The hourly forecast is stored under the key hourly
# – it is easy to iterate over the result set and extract the hour and temperature for each entry
# hourly = data["hourly"]

# for entry in hourly:
#    dt = datetime.fromtimestamp(entry["dt"], pytz.timezone('Europe/Vienna'))
#    temp = entry["temp"]
