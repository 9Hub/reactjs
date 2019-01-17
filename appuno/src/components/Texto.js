import React, {Component} from 'react';
import './Estilos.css';

class Texto extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Contenido: Prueva de texto</h1>
                <h1>{this.props.texto}</h1>
            </div>
        )
    }
}

export default Texto;