import React, { Component } from 'react';
// import logo from './logo.svg';
import Boton from './components/Boton';
import Titulo from './components/Titulo';
// import './App.css';

class App extends Component {

  nombre = "hola";

  // changeName=()=>{
  //   this.nombre = "funciona"
  //   this.Boton.texto = "f"
  // }

  render() {
    return (
      <div className="App">
        <Titulo titulo='Web Site'></Titulo>
        <Boton titulo='menu'></Boton>
        {/* <button className="boton" onClick={this.changeName}>Menu3</button> */}
        {/* <Imagen direccion="hola"></Imagen> */}
      </div>
    );
  }
}

export default App;