'use strict'

import { digData } from './digData'

export function printWeather (data) {
  console.log(data)
  // location status
  const loc = document.createElement('div')
  loc.classList.add('btn', 'btn-loc')
  loc.textContent = `${data.name}, ${data.sys.country}`

  // main section.
  // consist of an icon, temperature and weather description.
  const main = document.createElement('main')
  main.classList.add('main')

  const weatherIcon = document.createElement('img')
  weatherIcon.classList.add('main__icon')
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  weatherIcon.alt = `${data.weather[0].main}`

  const temperature = document.createElement('div')
  temperature.classList.add('main__temperature')
  temperature.textContent = `${data.main.temp}`

  const weatherDesc = document.createElement('div')
  weatherDesc.classList.add('main__description')
  weatherDesc.textContent = `${data.weather[0].description}`

  main.append(weatherIcon, temperature, weatherDesc)

  // misc section
  // contains of several fields
  const misc = document.createElement('div')
  misc.classList.add('misc')

  const fields = [
    { name: 'pressure', api: 'main.pressure', unit: 'hPa' },
    { name: 'humidity', api: 'main.humidity', unit: '%' },
    { name: 'cloud', api: 'clouds.all', unit: '%' },
    { name: 'wind', api: 'wind.speed', unit: 'm/s' },
    { name: 'wind_degree', api: 'wind.degree', unit: 'o' }
  ]

  fields.forEach(field => {
    const fieldContainer = document.createElement('div')
    fieldContainer.classList.add('misc__container')

    const icon = document.createElement('i')
    icon.classList.add('misc__icon')
    icon.textContent = field.name

    const number = document.createElement('div')
    number.classList.add('misc__number')
    number.textContent = digData(data, field.api)

    const unit = document.createElement('sub')
    unit.classList.add('misc__sub')
    unit.textContent = field.unit

    number.append(unit)
    fieldContainer.append(icon, number)

    misc.append(fieldContainer)
  })

  return [loc, main, misc]
}
