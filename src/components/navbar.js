import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            redirectTo: null
        }
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
            this.setState({
                redirectTo:'/sign-up'
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <div>
                                <section className="navbar-section">
                                    <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                        <span className="text-secondary">Cerrar sesion</span>
                                    </Link>
                                </section>
                            </div>
                            
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Iniciar sesion</span>
				                    </Link>

                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">Registrarse</span>
				                    </Link>

                                    <Link to="/about" className="btn btn-link">
                                        <span className="text-secondary">Acerca de nosotros</span>
				                    </Link>
                                </section>
                            )}
                    </div>
                </header>

            </div>

        );

    }
}

export default Navbar