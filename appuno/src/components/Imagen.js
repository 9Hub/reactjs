import React from 'react';
import './Estilos.css';

class Imagen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="imagen">
                {/* <h1>{this.props.direccion}</h1> */}
                {/* <image href="imagenes"></image> */}
                <img src="/imagenes/dondoEdicion.jpg"></img>
            </div>
        )
    }
}

export default Imagen;