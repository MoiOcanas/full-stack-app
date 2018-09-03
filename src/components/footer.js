import React, { Component } from 'react'
import { Icon } from 'react-icons-kit';

import {facebookSquare} from 'react-icons-kit/fa/facebookSquare';
import {instagram} from 'react-icons-kit/fa/instagram';
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare';

var style = {
    backgroundColor: "#9DCAE5",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    "font-family": "'Nunito Sans', sans-serif"
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%'
}

class Footer extends Component {
    render(){
        return(
            <div style={style}>
                <div style={phantom}>
                <div style={{marginTop:"-25px"}}>
                  <a href="#" style={{color: "white"}}>
                    <Icon size={32} icon={facebookSquare} />
                  </a>
                  <a href="#" style={{color: "white"}}>
                    <Icon size={32} icon={instagram} />
                  </a>
                  <a href="#" style={{color: "white"}}>
                    <Icon size={32} icon={twitterSquare} />
                  </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer