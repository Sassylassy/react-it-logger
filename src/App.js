import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import Searchbar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })

  return (
    <Fragment>
      <Searchbar />
      <div className='container'>
        <Logs />
      </div>
    </Fragment>
  )
}

export default App
