import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";

import withClass from "../../../hoc/withClass";
import style from './Person.module.css';


class Person extends Component {

    render() {
        console.log('[person.js] rendering ....');
        return (
            <Aux>
                <p key='i1' onClick={this.props.click}>
                    Im {this.props.name} and i am {this.props.age} years old

                </p>
                <p key='i2'>{this.props.children}</p>
                <input key='i3'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );




    }

}

export default withClass(Person, style.Person);