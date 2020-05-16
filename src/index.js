import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import logo from './logo.svg'
import {Form} from './form'

ReactDOM.render(
  <React.StrictMode>
    <>
      <header className="header">
        FORM VALIDATION
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="main">
        <h2>Create an account</h2>
        <Form />
      </main>
    </>
  </React.StrictMode>,
  document.getElementById('root'),
)
