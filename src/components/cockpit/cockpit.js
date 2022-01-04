import React, { useContext, useEffect, useRef } from 'react';

import styles from './Cockpit.module.css';

import AuthContext from '../../context/auth-context';


function Cockpit(props) {

    const toggleBtnRef = useRef(null);
    //use of contextApi in functional components 
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);
    //arrow function use garda error airako xa somehow ;
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request ... like example
        // setTimeout(() => {
        //     alert('save data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();

        //cleanup work using useEffect,triggers with component is unmounted
        return () => {

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
    if (props.personslength <= 2) {
        classes.push(styles.red); //lasses =['red']

    }
    if (props.personslength <= 1) {
        classes.push(styles.bold);//classes = ['red','bold']
    }
    return (
        <div className={styles.cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>Ready to learn?</p>

            <button ref={toggleBtnRef} className={btnClass}
                onClick={props.clicked}>Toggle Name</button>

            {/* use of contextApi in fuctional component */}

            <button onClick={authContext.login} >login</button>



        </div>
    );
};


export default React.memo(Cockpit);