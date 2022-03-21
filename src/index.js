'use strict'

import './index.scss'
import 'normalize.css'
import { getWeather } from './js/getWeather'
import { showSpinner } from './js/loadingSpinner'

export const app = document.querySelector('#app')

// initialize
showSpinner()

try {
  if (!navigator.geolocation) throw new Error("Your browser doesn't support geolocation.")
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
} catch (err) {
  onError(err.message)
}

function onSuccess (position) {
  getWeather(position)
}

export function onError (message) {
  console.error(message)
}
