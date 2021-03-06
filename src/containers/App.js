
import React, { Component } from 'react';
import styles from './App.module.css' //css module import

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/withClass';

import Aux from '../hoc/Auxiliary';

import AuthContext from '../context/auth-context';

class App extends Component{
 

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    //you can also initilize state this.state in here but 
    //bottom maa garda ni yehi process hunxa
  };
   
  //certain data ko state//in real case this can be data fetch from API 
  state = {
    persons: [
      { id:'1',name: 'anup', age: 23},
      { id: '2',name: 'saira', age: 2 },
      { id: '3',name: 'bimala', age: 52 }
    ],
    otherstate: 'some other value',
    showPersons : false,
    showcockpit: true,
    changeCounter: 0,
    Authenticated:false
  };

  static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
  
// doesnt use this
  // componentWillMount() {
  //   console.log("[App.js] componentwillMount"
  //   );
  // }

  componentDidMount(){
    console.log('[App.js] componentdidmount');
  }
 shouldComponentUpdate(nextProps,nextState){
   console.log('[App.js] shouldComponentUpdate');
   return true;
 }

 componentDidUpdate(){
   console.log('[App.js] componentDidUpdate');
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
    this.setState((prevState ,props)=>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    }
    
    );
  };
  
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

  loginHandler = () =>{
    this.setState({
      Authenticated:true
    })
  }


  render(){
console.log('[App.js] render');
    
     //best way to do it, instead of direct appliying ternary operator
     let persons = null;
     

     if(this.state.showPersons){
        persons = ( 
          <div>
            <Persons 
            persons={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed ={this.namechangedHandler}
            isAuthenticated ={this.state.Authenticated}
            />
          </div> 
          );
        
        
       };
 

     
    return (
    //css module use garyeko
    
      <Aux> 
      
        <button onClick={()=>{this.setState({showcockpit:false})}}>Remove Cockpit</button>
        <AuthContext.Provider value={{ 
          authenticated: this.state.Authenticated, 
          login : this.loginHandler}}
          >
          {this.state.showcockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personslength={this.state.persons.length}
              clicked={this.showpersonHandler}
              
            />
          ) : null}
          {persons}
          </AuthContext.Provider>
       
      </Aux>
      
    );
    //return react.createElement('div',{className:"App"},react.createElement('h1',null,"hello learners"));
  
  };
    


}

export default withClass(App,styles.App);




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