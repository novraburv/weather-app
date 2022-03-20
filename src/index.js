'use strict'

import 'normalize.css'
import './index.scss'

function init () {
  const icon = document.createElement('i')
  icon.classList.add('fa-solid', 'fa-circle-plus')

  document.querySelector('#app').append(icon)
}

init()
