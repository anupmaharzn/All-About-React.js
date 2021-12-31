import React from "react";
import style from './Person.module.css';


const person = (props) => {

    return (
        <div className={style.Person} >
            <p onClick={props.click}> Im {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} ></input>
        </div>
    );
}

export default person;                       