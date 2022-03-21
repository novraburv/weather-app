'use strict'
import { app } from '../index'

export function showSpinner () {
  const container = document.createElement('div')
  container.classList.add('loading')

  const icon = document.createElement('i')
  icon.classList.add('loading__icon', 'fa-solid', 'fa-spinner')

  container.append(icon)
  app.append(container)
}
