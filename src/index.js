'use strict'

import 'normalize.css'
import './index.scss'
import { showSpinner } from './js/loadingSpinner'

export const app = document.querySelector('#app')

// initialize
showSpinner()
