import React, { Component } from "react";

import PropTypes from 'prop-types';

import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import style from './Person.module.css';
import AuthContext from "../../../context/auth-context";


class Person extends Component {

    //use of ref to select particualr jsx element in react
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    //way of using contextApi in clas based componenet
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        //context api can be accessed like this in
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[person.js] rendering ....');

        return (
            <Aux>
                {/* //contextapi can be accessed like this */}
                {this.context.authenticated ? <p>Is Authenticated</p> : <p>Please login</p>}

                <p onClick={this.props.click}>
                    Im {this.props.name} and i am {this.props.age} years old

                </p>
                <p key='i2'>{this.props.children}</p>
                <input key='i3'
                    // react ref way to select jsx element
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );




    };

};
//using external package prop-types
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, style.Person);