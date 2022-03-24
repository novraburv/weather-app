'use strict'

import { digData } from './digData'
import { app } from '../index'
import { showSearchLoc } from './showSearchLoc'

import '../scss/location.scss'
import '../scss/mainSection.scss'
import '../scss/misc.scss'

export function printWeather (data) {
  // location status
  const loc = document.createElement('div')
  loc.classList.add('btn', 'btn-loc')
  loc.textContent = `${data.name}, ${data.sys.country}`
  loc.addEventListener('click', showSearchLoc)

  // main section.
  // consist of an icon, temperature and weather description.
  const main = document.createElement('main')
  main.classList.add('main')

  const basic = document.createElement('div')
  basic.classList.add('main__basicInfo')

  const weatherIcon = document.createElement('img')
  weatherIcon.classList.add('main__icon')
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  weatherIcon.alt = `${data.weather[0].main}`

  const temperature = document.createElement('div')
  temperature.classList.add('main__temperature')
  temperature.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>C`

  basic.append(weatherIcon, temperature)

  const weatherDesc = document.createElement('div')
  weatherDesc.classList.add('main__description')
  weatherDesc.textContent = `${data.weather[0].description}`

  main.append(basic, weatherDesc)

  // misc section
  // contains of several fields
  const misc = document.createElement('div')
  misc.classList.add('misc')

  const fields = [
    { name: 'pressure', api: 'main.pressure', unit: 'hPa', icon: 'gauge' },
    { name: 'humidity', api: 'main.humidity', unit: '%', icon: 'droplet' },
    { name: 'cloud', api: 'clouds.all', unit: '%', icon: 'cloud' },
    { name: 'wind', api: 'wind.speed', unit: 'm/s', icon: 'wind' },
    { name: 'wind_degree', api: 'wind.deg', unit: 'o', icon: 'compass' }
  ]

  fields.forEach(field => {
    const fieldContainer = document.createElement('div')
    fieldContainer.classList.add('misc__container')

    const icon = document.createElement('i')
    icon.classList.add('misc__icon', 'fa-solid', `fa-${field.icon}`)

    const number = document.createElement('div')
    number.classList.add('misc__number')
    number.textContent = digData(data, field.api)

    const unit = document.createElement('sup')
    unit.classList.add('misc__sub')
    unit.textContent = field.unit

    number.append(unit)
    fieldContainer.append(icon, number)

    misc.append(fieldContainer)

    // append generated contents to app
    if (app.children) [...app.children].forEach(child => child.remove())
    app.append(loc, main, misc)
  })
}
