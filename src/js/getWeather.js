'use strict'
import { onError } from '../index'

export function getWeather (location) {
  const lat = location.coords.latitude
  const lon = location.coords.longitude
  const apiKey = '068468bc8c92d24ab204f7acffd62861'
  const endpoint = 'https://api.openweathermap.org/data/2.5/weather'

  fetch(`${endpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) { throw new Error(response.statusText) }
      return response.json()
    })
    .then(printWeather)
    .catch(onError)
}

function printWeather (data) {
  console.log(data)
}
