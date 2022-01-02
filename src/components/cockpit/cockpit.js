import React from 'react';

import styles from './cockpit.module.css';

const cockpit = (props) => {

    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.red;
    }
    if (props.persons.length <= 2) {
        classes.push(styles.red); //lasses =['red']

    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);//classes = ['red','bold']
    }
    return (
        <div className={styles.cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>Ready to learn?</p>

            <button className={btnClass}
                onClick={props.clicked}>Toggle Name</button>
        </div>
    );
};

export default cockpit;