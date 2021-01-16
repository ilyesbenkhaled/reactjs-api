import React from 'react';
import './App.css';
import logo from './logo192.png';
import Footer from './components/footer/footer.component';
import { Cardlist } from './components/card-list/card-list.component';
// import ReactDom from 'react-dom';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          monsters: [],
          searchField: '',
          filteredData: ''
        };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => this.setState({monsters: users}));
        }

    render() {
      const { monsters, searchField } = this.state;
      const filteredData = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
      });
      console.log(filteredData)
      return (

           <div>
               <img src={logo} alt="logo"/>
               <SearchBox
                handleInputChange={e => this.setState({ searchField: e.target.value}) }
                placeholder='monsters search' />

                <Cardlist monsters={this.state.monsters}/>

                <div>
                  {this.state.filteredData}
                </div>

              <Footer />
              </div>

        );
    }
}


export default App;
