import React from "react";
import style from './Person.module.css';


const person = (props) => {

    //Lets suppose we get error while rendering person 
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error("something is wrong");
    }

    return (
        <div className={style.Person} >
            <p onClick={props.click}> Im {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} ></input>
        </div>
    );
}

export default person;                       