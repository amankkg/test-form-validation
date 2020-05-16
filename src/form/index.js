import React, {useState} from 'react'

import './index.css'
import {Field} from './field'
import {validate, schema} from './validation'

const defaultState = schema.default()

export const Form = () => {
  const [state, setState] = useState(defaultState)
  const [touched, setTouched] = useState({})
  const errors = validate(state, touched)
  const disallowSubmit = Object.values(errors).some((msgs) => msgs.length > 0)

  const onChange = (e) => {
    const {name, value} = e.currentTarget
    setState((s) => ({...s, [name]: value}))
  }

  const onBlur = (e) => {
    const {name} = e.currentTarget
    setTouched((s) => ({...s, [name]: true}))
  }

  const reset = () => {
    setState(defaultState)
    setTouched({})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (disallowSubmit) return
    // prettier-ignore
    alert(Object.entries(state).map(([k, v]) => k + ': ' + v).join('\n'))
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Field
        label="Login"
        name="login"
        value={state.login}
        onChange={onChange}
        onBlur={onBlur}
        errors={errors.login}
        required
      />
      <Field
        label="Password"
        name="password"
        type="password"
        value={state.password}
        onChange={onChange}
        onBlur={onBlur}
        errors={errors.password}
        required
      />
      <Field
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={state.confirmPassword}
        onChange={onChange}
        onBlur={onBlur}
        errors={errors.confirmPassword}
        required
      />
      <Field
        label="E-mail"
        name="email"
        value={state.email}
        onChange={onChange}
        onBlur={onBlur}
        errors={errors.email}
        required
      />
      <Field
        label="Age"
        name="age"
        type="number"
        value={state.age}
        onChange={onChange}
        onBlur={onBlur}
        errors={errors.age}
        required
      />
      <div className="actions">
        <button type="button" onClick={reset}>
          Reset
        </button>
        <button disabled={disallowSubmit}>Submit</button>
      </div>
    </form>
  )
}
