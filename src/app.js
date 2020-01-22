import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/main.scss'

import Hero from './components/Hero'

const App = () => {

  return <Hero />

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)