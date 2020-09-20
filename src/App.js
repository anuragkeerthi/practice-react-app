import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';



  const app = props => {
   const [personsState, setPersonsState] = useState({
      persons : [
        {name: 'Anurag', age: 23},
        {name: 'Bond', age: 29}
      ],
      otherState : "someother Value"
    });

    const switchNameHandler = () => {
      // this.state.persons[0].name = "Anurag Keerthi";
      setPersonsState({persons : [
        {name: 'Anurag Keerthi', age: 23},
        {name: 'Bond', age: 50}
      ],
      otherState : personsState.otherState
    });
    };

    return (
      <div className="App">
         <h1>Testing...</h1>
         <button onClick={switchNameHandler}>Switch name</button>
         <Person name= {personsState.persons[0].name} age={personsState.persons[0].age} />
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies : Shooting</Person>
      </div>
    );
    //return React.createElement('div',{className : 'App'}, React.createElement('h1',null,'Hi, This is H1 Tag'));

  }


export default app;

  
