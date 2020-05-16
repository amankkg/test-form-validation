import React from 'react'

import './index.css'

export const Form = () => {
  return (
    <form className="form">
      <div className="field">
        <label>Login</label>
        <input id="login" />
      </div>
      <div className="field">
        <label>Password</label>
        <input id="password" type="password" />
      </div>
      <div className="field">
        <label>Confirm password</label>
        <input id="confirmPassword" type="password" />
      </div>
      <div className="actions">
        <button type="button">Reset</button>
        <button>Submit</button>
      </div>
    </form>
  )
}
