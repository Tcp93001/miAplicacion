import React, { Component, PropTypes } from 'react'
import Input from './Input'

class Practica extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numeroA: 1,
      numeroB: 3
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleNumeroA = this.handleNumeroA.bind(this)
  }

  suma(a, b) {
    return a + b
  }

  resta(a, b) {
    return a - b
  }

  handleNumeroA() {
    this.setState(
      {numeroA: this.state.numeroA + 1}
    )
  }

  handleInput(event) {
    this.setState(
      {numeroA : event.target.value}
    )
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => {
      console.log('exito')
      console.log('response ', resp.message)
    })
  }

  render () {
    return (
      <div>
        <h1>Resultado de suma</h1>
        <p>Numero A: {this.state.numeroA}</p>
        <p>Inserta A</p>

        <Input caracteres={this.state.numeroA} detectarCambio={this.handleInput} />

        <br/>
        <button onClick={this.handleNumeroA}>Sumale 1</button>
        <p>Numero B: {this.state.numeroB}</p>
        <p>Texto capturado: {this.state.numeroA}</p>
        <p>Rsta A + B: {this.resta(this.state.numeroA, this.state.numeroB)}</p>
      </div>
    )
  }
}

export default Practica