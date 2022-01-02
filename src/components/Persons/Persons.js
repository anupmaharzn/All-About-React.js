import React, { PureComponent } from "react";
import Person from "./Person/Person";


class Persons extends PureComponent {

    //life cycle update

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerviedStateFromProps');
    //     return state;
    // }


    //not used ahile 

    // componentWillReceiveProps(props) {
    //  console.log('[Persons.js] componentWillReceiveProps',props);
    // }




    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[persons.js] shouldComponentUpdate');
    //     // check
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }

    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Perons.js] getSnapshotBeforUpdate');
        return { message: 'Snapshot!' };
    }
    //not used ahile
    // componentWillUpdate(){

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
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

