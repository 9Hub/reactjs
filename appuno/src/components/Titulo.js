import React, {Component} from 'react';
import './Estilos.css';

class Titulo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="titulo">
                <h1>{this.props.titulo}</h1>
            </div>
        )
    }
}

export default Titulo;