import React from 'react';
import data from './db.json'

export  default class Temp extends React.Component{
    constructor(props){
        super(props);
        this.state = {temp : data}
    }

    render(){

        var array = this.state.temp.map(data => (
            <div>
            <p>{data.id}</p>
            </div> 
  
    ));

        return(
            {array}
            
        );
    }
}