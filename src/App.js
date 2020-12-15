import React, { Component } from 'react';
import './App.css';
import logo from './logo192.png';


class App extends Component {
    constructor() {
        super();
        this.state = {
          monsters: []
        };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => this.setState({monsters: users}));
        }

    render() {
      return (
           <div className="App">
           <img src={logo}/>
          {   
            this.state.monsters.map(monster => (
              <h2 key={monster.id}>{monster.name}</h2>
              
              ))
          }
          </div>
        );
    }
}


export default App;
