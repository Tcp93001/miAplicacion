import React, { Component } from 'react'

class Main extends Component {

  componentDidMount() {
    console.log(1 + 4)
  }

  render () {
    console.log('nombre', this.props.nombre)
    console.log('continente', this.props.continente)
    console.log('prps', this.props)

    return (
      <>
        <div>Pais: {this.props.nombre}</div>
        <div>contienente: {this.props.continente}</div>
      </>
    )
  }

}

export default Main