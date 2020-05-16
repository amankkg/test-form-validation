import React from 'react'

export const Field = ({label, errors, ...inputProps}) => {
  const id = 'field:' + inputProps.name
  const className = 'field' + (errors.length > 0 ? ' error' : '')

  return (
    <div className={className}>
      <label>{label}</label>
      <input id={id} {...inputProps} />
      {errors.map((msg) => (
        <span key={msg}>{msg}</span>
      ))}
    </div>
  )
}
