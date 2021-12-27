
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{

   
  //certain data ko state
  state = {
    persons: [
      { name: 'anup', age: 23 },
      { name: 'saira', age: 2 },
      { name: 'bimala', age: 52 }
    ],
    otherstate: 'some other value'
  }

  //anyform of function hunu parxa shorthanded hudaina
  switchNameHandler = (newName) => {
    //console.log('was clicked');
    //DONT DO THIS  this.state.persons[0].name = "anupchanged";
    //manipulated state with setstate jasle garda dom render hunxa
    this.setState(
      {
        persons: [
          { name: newName, age: 23 },
          { name: 'sairachanged', age: 2 },
          { name: 'bimalachanged', age: 52 }
        ]
      }
    )
  }
  //event object
  namechangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: "anupchanged", age: 23 },
          { name: event.target.value, age: 2 },
          { name: 'bimalachanged', age: 52 }
        ]
      }
    )
  }


  render(){

    //inline styling for button
     const style = {
       backgroundColor :"yellow",
       font:'inherit',
       border:'1px solid blue',
       padding:'8px',
       cursor:'pointer',
       borderRadius:'5px',
     };

     
    return (<div className="App">
      <h1>hello learners</h1>
      <p>Ready to learn?</p>

      <button style={style} onClick={this.switchNameHandler.bind(this,"newanup")}>Switch Name</button>
     
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}>
        My Hobbies:Racing
     </Person>
    
     <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      //passing method refrence between components
      click={this.switchNameHandler.bind(this,'newAnup1')}
      changed={this.namechangedHandler}></Person>

      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}>
      </Person>
    </div>);
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