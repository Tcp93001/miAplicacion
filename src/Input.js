import React from 'react'

const Input = props => {
  return (
    <div>
      <input type="text" value={props.caracteres} onChange={props.detectarCambio} />
    </div>
  )
}

export default Input