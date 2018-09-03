import React, { Component } from 'react'
import axios from 'axios'


class Request extends Component{
    constructor() {
        super()

        this.state = {
            name:'',
            model:'',
            option: '',
            price: '',
            _id:'',
            redirectTo: null,
            requests: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSelectChange(e) {
        this.setState({
          option: e.target.value
        });
    }


    handleSubmit(event){
        event.preventDefault()
        
        fetch('/request/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              this.setState({title: '', description: ''})
            })
            .catch(err => console.error(err))
    }

    render(){

        return(
            <div>
                <img style={{width:"200px", marginTop:"20px"}} src="https://orig00.deviantart.net/5944/f/2011/085/8/c/carwash_logo_by_bjworks-d3chswv.jpg"/>
                <h3 style={{marginTop: "-40px", color: "#14557C"}}> GO Carwash</h3>
                <h1 className="title" style={{marginTop: "60px"}}>Crear pedido</h1>

                <form className="form-horizontal">
                    <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Nombre:</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                    </div>

                    <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Modelo:</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={this.state.model}
                                    onChange={this.handleChange}
                                />
                            </div>
                    </div>

                    <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Escoja un paquete:</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                            <select className="form-select" value={this.state.option} onChange={this.handleSelectChange}>
                                <option>Escoja una opcion</option>
                                <option value="Paquete 1">Paquete 1</option>
                                <option value="Paquete 2">Paquete 2</option>
                                <option value="Paquete 3">Paquete 3</option>
                            </select>
                            </div>
                    </div>

                    <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Price:</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                />
                            </div>
                    </div>

                    <div className="form-group">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                                 type="submit"
                                 onClick={this.handleSubmit}>Enviar pedido</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Request