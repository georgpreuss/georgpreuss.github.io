import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './styles/main.scss'

const App = () => {

  return <h1 className='title'>Hello World</h1>

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)