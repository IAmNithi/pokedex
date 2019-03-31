import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Search from './components/Search';
import Body from './components/Body';
import './App.css';
var data = require('./pokedex.json');

class App extends Component {
  constructor(){
    super();
    this.state = {
      serviceData: data
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  onSearchSubmit(e){
    this.setState({
      serviceData: []
    }, function() {
    console.log('printing the event', e);
    if (e.length !== 0) {
        const enteredValue = e.toLowerCase();
        const presentValue = data.filter(function(da) {
            return da.name['english'].toLowerCase().indexOf(enteredValue) > -1;
        });
        this.setState({
          serviceData: presentValue 
        });
    } else {
      this.setState({
        serviceData: data 
      });
    }
  });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Search onSubmit={this.onSearchSubmit}/>
        <Body userData={this.state.serviceData} />
      </div>
    );
  }
}

export default App;
