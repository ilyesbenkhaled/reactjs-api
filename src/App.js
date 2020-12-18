import React, {Component} from 'react';
import './App.css';
import logo from './logo192.png';
import Footer from './components/footer/footer.component';
import { Card } from './components/card/card.component';
import ReactDom from 'react-dom';

class App extends React.Component {
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
           <div className=''>
               <img src={logo}/>
              {   
                this.state.monsters.map(monster => (
                  <Card monster={monster} />
                  ))

              }
              <Footer />
              </div>
        
        );
    }
}


export default App;
