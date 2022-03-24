'use strict'
import { onError } from '../index'
import { printWeather } from './printWeather'

const apiKey = '068468bc8c92d24ab204f7acffd62861'
const endpoint = 'https://api.openweathermap.org/data/2.5/weather'
const units = 'metric'

export function getWeatherWithGeolocation (location) {
  const lat = location.coords.latitude
  const lon = location.coords.longitude

  fetch(`${endpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)
    .then(response => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then(printWeather)
    .catch(onError)
}

export function getWeatherWithCityName (event) {
  if (event.code !== 'Enter' || !event.currentTarget.value) return
  const query = event.currentTarget.value

  event.currentTarget.value = ''
  event.currentTarget.parentNode.remove()

  fetch(`${endpoint}?q=${query}&appid=${apiKey}&units=${units}`)
    .then(response => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then(printWeather)
    .catch(onError)
}
