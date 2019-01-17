import React, {Component} from 'react';
import imagenUno from './imagenes/imag1.jpg';
import imagenDos from './imagenes/imagenUno.jpg';
import './Estilos.css';

class Boton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            titulo: "aaa",
            pruevaImagen: imagenUno
        }
    }


    changeName = () => this.setState(
        state => ({
            count: state.count + 1,
            titulo: "aaa"
        })
    )

    nameHola = () => this.setState(state => ({titulo: "Hola"}))

    nameMenu = () => this.setState(state => ({titulo: "Menu"}))

    namePrueva = () => this.setState(state => ({titulo: "Prueva"}))

    changeImage = () => this.setState(state => ({pruevaImagen: imagenDos}))
    
    render(){
        return(
            <div className="encabezado">
                <button className="boton" onClick={this.changeName}>Menu</button>
                <button className="boton" onClick={this.changeImage}>Menu 2</button>
                <button className="boton" onClick={this.nameMenu}>Menu 3</button>
                <button className="boton" onClick={this.namePrueva}>Menu 4</button>
                <h1 className="texto">{this.state.count}</h1>
                <h1 className="texto">{this.state.titulo}</h1>
                <header>
                    <img src={this.state.pruevaImagen} alt="prueva de imagen"></img>
                </header>
            </div>
        )
    }
}

export default Boton;