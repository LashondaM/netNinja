import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        // console.log(this.props);
        const {name, age, afro} = this.props;
        return(
            <div className="ninja">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Afro: { afro }</div>
            </div>
        )
    }
}

export default Ninjas
//NINJAS IS THE NAME OF THE CLASS THAT WE EXPORT, ALWAYS USE THE NAME OF THE CLASS WHEN EXPORTING WITH REACT TILL FURTHER NOTICE