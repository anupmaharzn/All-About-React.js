
import React, { Component } from 'react';
import styles from './App.module.css' //css module import

import Person from '../components/Persons/Person/Person';

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/cockpit/cockpit';

class App extends Component{

   
  //certain data ko state//in real case this can be data fetch from API 
  state = {
    persons: [
      { id:'1',name: 'anup', age: 23 },
      { id: '2',name: 'saira', age: 2 },
      { id: '3',name: 'bimala', age: 52 }
    ],
    otherstate: 'some other value',
    showPersons : false
  }

  //anyform of function hunu parxa shorthanded hudaina
  //event object
  namechangedHandler = (event,id) => {
    const personIndex= this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] =person;
    this.setState(
      {
      persons:persons
      }
    )
  }
  
  deletePersonHandler=(personIndex) =>{
     // const persons = this.state.persons; dont do this coz direct acess
     //make copy of array using spread operator
      const persons = [...this.state.persons];
      persons.splice(personIndex,1); //remove array
      this.setState({
        persons:persons
      });
  }

  showpersonHandler = () => {
   // const doesShow = this.state.showPersons;
   this.setState ({
     //showPersons:!doesShow
     //or short cut
     showPersons : !this.state.showPersons
   });
  }


  render(){

    
     //best way to do it instead of direct appliying ternary operator
     let persons = null;
     

     if(this.state.showPersons){
        persons = ( 
          <div>
            <Persons 
            persons={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed ={this.namechangedHandler}
            />
          </div> 
          );
        
        
       };
 

     
    return (
    //css module use garyeko
      <div className={styles.App}> 
          <Cockpit
          showPersons = {this.showPersons}
          persons = {this.state.persons}
          clicked = {this.showpersonHandler}
          />
          {persons}


        </div>
      
    );
    //return react.createElement('div',{className:"App"},react.createElement('h1',null,"hello learners"));
  
  };
    


}

export default App;




/** 
 * 
 * 
 * hooks ko example theyo 
 * 
 */
//import {useState} from react;
  // const [personState,setPersonState] = useState ({
  //   persons: [
  //     { name: 'anup', age: 23 },
  //     { name: 's aira', age: 2 },
  //     { name: 'bimala', age: 52 }
  //   ],
  //   otherstate: 'some other value'
  // });
  // //can use multiple usestate
  
  // const [otherstate,setOtherState] = useState({otherstate:'some otherstate'});
  
  // console.log(personState,otherstate);
  //  const switchNameHandler = () => {
  //   //console.log('was clicked');
  //   //DONT DO THIS  this.state.persons[0].name = "anupchanged";
  //   //manipulated state with setstate jasle garda dom render hunxa
  //   setPersonState(
  //     {
  //       persons: [
  //         { name: 'anupchanged', age: 23 },
  //         { name: 'sairachanged', age: 2 },
  //         { name: 'bimalachanged', age: 52 }
  //       ]
  //     }
  //   )
  // }