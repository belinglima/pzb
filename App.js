import React from 'react'
import { createAppContainer } from 'react-navigation'

import Routes from './src/routes'

const App = createAppContainer(Routes)
console.disableYellowBox = true;

export default App
