
import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';



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

    //inline styling for button
     const style = {
       backgroundColor :"yellow",
       color:'black',
       font:'inherit',
       border:'1px solid blue',
       padding:'8px',
       cursor:'pointer',
       borderRadius:'5px',
      
     };
     //best way to do it instead of direct appliying ternary operator
     let persons = null;

     if(this.state.showPersons){
        persons = ( 
          <div>
        {this.state.persons.map( (person,index) =>{
          return <Person 
          click ={ () =>this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) =>this.namechangedHandler(event,person.id)}/>
        })}
          </div> );
          style.backgroundColor ='green'
          style.color='white'
        
       };

       const classes =[];
       if(this.state.persons.length<=2){
         classes.push('red'); //lasses =['red']

       }
       if(this.state.persons.length <=1){
         classes.push('bold');//classes = ['red','bold']
       }

     
    return (
    
        <div className="App">
          <h1>hello learners</h1>
          <p className={classes.join(' ')}>Ready to learn?</p>

          <button style={style}
            onClick={this.showpersonHandler}>Toggle Name</button>
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