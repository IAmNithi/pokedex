import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Search from './components/Search';
import Body from './components/Body';
import ModalWindow from './components/ModalWindow';
import './App.css';
var data = require('./pokedex.json');

class App extends Component {
  constructor() {
    super();
    this.state = {
      serviceData: data,
      openModal: false,
      modalType: '',
      viewData: {}
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addCard = this.addCard.bind(this);
  }
  onSearchSubmit(e) {
    this.setState({
      serviceData: []
    }, function () {
      if (e.length !== 0) {
        const enteredValue = e.toLowerCase();
        const presentValue = data.filter(function (da) {
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
  openModal(e, data) {
    if (e === 'new') {
      this.setState({
        openModal: true,
        modalType: e
      })
    } else {
      this.setState({
        openModal: true,
        modalType: e,
        viewData: data
      })
    }
  }
  closeModal() {
    this.setState({
      openModal: false
    })
  }
  addCard(e, type) {
    if (type === 'update') {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(e.id)) {
          data.splice([i], 1);
          data.unshift(e);
          this.setState({
            serviceData: data
          });
        }
      }
    } else {
      data.unshift(e);
      this.setState({
        serviceData: data
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <ModalWindow modalStatus={this.state.openModal} closeModal={this.closeModal} modalType={this.state.modalType} data={this.state.viewData} createCard={this.addCard} />
        <Search onSubmit={this.onSearchSubmit} openModal={this.openModal} />
        <Body userData={this.state.serviceData} openModal={this.openModal} />
      </div>
    );
  }
}

export default App;
