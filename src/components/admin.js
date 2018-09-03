import React, { Component } from 'react'

class Admin extends Component {
    constructor(){
        super()
        this.state = {
            _id: '',
            name: '',
            model:'',
            option:'',
            price:'',
            requests:[]
        }
        this.getRequests = this.getRequests.bind(this)

    }

    componentDidMount(){
        this.getRequests()
    }

    getRequests() {
        fetch('/request/')
             .then(res => res.json())
             .then(data => {
                 this.setState({
                     requests: data
                 });
                 console.log(this.state.requests);
             });
    }

    deleteTask(id){
            fetch(`/request/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res=> res.json())
                .then(data => {
                    this.getRequests()
            })
    }

    render(){
        return(
            <div>
                <div className="container">

                    <img style={{width:"200px", marginTop:"20px"}} src="https://orig00.deviantart.net/5944/f/2011/085/8/c/carwash_logo_by_bjworks-d3chswv.jpg"/>
                    <h3 style={{marginTop: "-40px", color: "#14557C"}}> GO Carwash</h3>
                    <div className="columns">

                        <div className="column col-2">
                           
                        </div>

                        <div className="column col-8">
                        <h3> Pedidos de clientes</h3>
                        <table class="table table-striped table-hover" style={{border:"3px solid #9DCAE5"}}>
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Modelo de auto</th>
                                    <th>Paquete</th>
                                    <th>Precio</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.requests.map(request => {
                                        return(
                                            <tr key={request._id}>
                                                <td>{request.name}</td>
                                                <td>{request.model}</td>
                                                <td>{request.option}</td>
                                                <td>{request.price}</td>
                                                <td>
                                                    <button className="btn btn-success"> 
                                                        Editar
                                                    </button>

                                                    <button className="btn btn-error" style={{margin: "4px"}} onClick={() => this.deleteTask(request._id)}>
                                                         Eliminar
                                                    </button>   
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin