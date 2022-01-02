import React, { Component } from "react";
import style from './Person.module.css';


class Person extends Component {

    render() {
        console.log('[person.js] rendering ....');
        return (
            <div className={style.Person} >
                <p onClick={this.props.click}> Im {this.props.name} and i am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name} ></input>
            </div>
        );
    }

}

export default Person;                       