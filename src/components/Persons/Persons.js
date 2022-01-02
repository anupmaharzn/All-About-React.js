import React, { Component } from "react";
import Person from "./Person/Person";


class Persons extends Component {

    //life cycle update

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerviedStateFromProps');
    //     return state;
    // }


    //not used ahile 

    // componentWillReceiveProps(props) {
    //  console.log('[Persons.js] componentWillReceiveProps',props);
    // }




    shouldComponentUpdate(nextProps, nextState) {
        console.log('[persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Perons.js] getSnapshotBeforUpdate');
        return null;
    }
    //not used ahile
    // componentWillUpdate(){

    // }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    render() {
        console.log('[Persons.js] rendering ....');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
};



export default Persons;

