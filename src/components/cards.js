import React, { Component } from 'react'

class Card extends Component {
    constructor() {
        super()

        this.state = {
            cards:[
                {
                    src:'https://ded7t1cra1lh5.cloudfront.net/media/123059/3499b37edd50e480db9a3be5c339263161a08c91/original/auto-519826_960_720.jpg?1457471592',
                    title:'Lavado'
                },
                {
                    src:'http://ve.emedemujer.com/wp-content/uploads/sites/2/2016/05/limpiar-el-carro.jpg',
                    title:'Aspirado'
                },
                {
                    src: 'https://carclean.com.ec/wp-content/uploads/2016/07/limpieza-profunda.jpg',
                    title:'Limpieza profunda'
                }
            ]
        }
    }
    render() {
        return( 
            <div>
               <div class="card">
                <div class="card-header">
                    <div class="card-title h5">{this.props.title}</div>
                </div>
                <div class="card-image">
                    <img src="img/osx-el-capitan.jpg" class="img-responsive"/>
                </div>
                <div class="card-body">
                    ...
                </div>
                </div>
            </div>
        )
    }
}

export default Card