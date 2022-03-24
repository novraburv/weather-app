'use strict'

import { app } from '../index'
import { getWeatherWithCityName } from './getWeather'

import '../scss/search.scss'

export function showSearchLoc () {
  const search = app.querySelector('.search')
  if (search) {
    search.remove()
    return
  }

  const div = document.createElement('div')
  div.classList.add('search')

  const close = document.createElement('i')
  close.classList.add('search__close', 'fa-solid', 'fa-xmark')
  close.addEventListener('click', (e) => e.currentTarget.parentNode.remove())

  const input = document.createElement('input')
  input.classList.add('search__input')
  input.type = 'text'
  input.placeholder = 'london, gb'
  input.addEventListener('keypress', getWeatherWithCityName)

  div.append(input, close)
  app.append(div)
}
