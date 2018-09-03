import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class About extends Component {
    render(){

        return(
            <div>
                <h2 style={{marginTop:"40px"}}>Acerca de nosotros</h2>

                <div className="container" style={{marginTop:"40px"}}>
                    <div className="columns">

                        <div className="column col-6" style={{border: "1px solid #14557C"}}>
                            <div className="tile" style={{marginTop:"40px"}}>
                                <div className="tile-content column col-6">
                                    <h4 className="tile-title">CEO - Hector Garzilaso</h4>
                                    <p className="tile-subtitle text-gray">Creador de la compania, y principal operador de la logistica interna de la empresa.</p>
                                </div>
                                <div className="tile-content column col-6">
                                    <h4 className="tile-title">Javier Ocanas</h4>
                                    <p className="tile-subtitle text-gray">Principal inversionista de la empresa y encargado de las realaciones esteriores.</p>
                                </div>
                                <div className="tile-content column col-6">
                                    <h4 className="tile-title">Moises Ocanas</h4>
                                    <p className="tile-subtitle text-gray">La polla con cebolla.</p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="column col-6">
                            <Map google={this.props.google} zoom={14}>
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />
                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <div>  
                                </div>
                            </InfoWindow>
                            </Map>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDBsqVhrNTbldyJ-d3YJ2s-3imCCeVklzE')
  })(About)