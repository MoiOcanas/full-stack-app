import React, { Component } from 'react'
import './styles'
import styles from './styles';
import Card from './cards'


class Home extends Component {

    render() {
        return (
            <div className="centered">
                <div className="container">
                    <div className="columns">

                        <div className="column col-12">
                          <div className="columns">
                              <div className="column col-4" style={styles.home.jumper}>
                                <img style={{width:"200px", marginTop:"80px"}} src="https://orig00.deviantart.net/5944/f/2011/085/8/c/carwash_logo_by_bjworks-d3chswv.jpg"/>
                                <h3 style={{marginTop: "-40px", color: "#14557C"}}> GO Carwash</h3>

                                <p>Encontrar ese color perfecto con nuestro selector de color y descubrir bellas armonías de color, 
                                    tintes, matices y tonos; códigos de color de entrada Hex, los valores RGB y HSL, y generar HTML, CSS y estilos SCSS.
                                    Encontrar ese color perfecto con nuestro selector de color y descubrir bellas armonías de color, 
                                    tintes, matices y tonos.</p>
                              </div>

                              <div className="column col-8" style={styles.home.promo}>
                                <img src="https://img.grouponcdn.com/deal/dFZiV2TBPxKfKMkqWbZb/dT-2048x1229/v1/c700x420.jpg" className="img-responsive" style={styles.home.promoimg}/>
                                <div style={styles.home.hilight}>
                                    hola
                                </div>
                              </div>
                            
                            <div className="column col-12" style={styles.home.jumper2}>
                                hola
                            </div>

                          </div>
                        </div>

                        <div className="column col-4" style={styles.home.top}>
                            <Card title="Hola 1"/>
                        </div>

                        <div className="column col-4" style={styles.home.top}>
                            <Card title="Hola 2"/>
                        </div>

                        <div className="column col-4" style={styles.home.top}>
                            <Card title="Hola 3"/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Home
