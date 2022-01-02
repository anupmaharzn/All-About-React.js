import React, { useEffect } from 'react';

import styles from './Cockpit.module.css';

function Cockpit(props) {
    //arrow function use garda error airako xa somehow ;
    useEffect(function () {
        console.log('[Cockpit.js] useEffect');
        //http request ...
        //const timer =
        setTimeout(() => {
            alert('save data to cloud');
        }, 1000);
        //cleanup work using useEffect,triggers with component is unmounted
        return () => {
            //clearTimeout(timer);
            console.log('[cockpit.js] cleanup work in useEffect');
        };
    }, []); //depending up second arguement useEffect can be controlled
    //works in every life cycle coz no second arugments
    useEffect(function () {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });
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


export default Cockpit;