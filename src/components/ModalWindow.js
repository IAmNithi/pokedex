import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: props.modalStatus, modalType: props.modalType, data: props.data, description: '', name: '', type: '', japane: '', chines:  '', defense_level: '', attack_level: '', hp: '',id: '' };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.modalType === 'edit') {
      this.setState({
        modal: nextProps.modalStatus,
        modalType: nextProps.modalType,
        data: nextProps.data,
        name: nextProps.data.name['english'],
        id: nextProps.data.id,
        type: nextProps.data.type,
        attack_level: nextProps.data.base.Attack,
        defense_level: nextProps.data.base.Defense,
        hp: nextProps.data.base.HP,
        chines: nextProps.data.name['chinese'],
        japane: nextProps.data.name['japanese']
      });
    } else {
      this.setState({
        modal: nextProps.modalStatus,
        modalType: nextProps.modalType,
        data: nextProps.data,
        name: '',
        id: '',
        type: '',
        attack_level: '',
        defense_level: '',
        hp: '',
        chines: '',
        japane: ''
      });
    }
  }
  handleChangeName(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    this.props.closeModal();
  }
  handleSubmit() {
    if(this.state.modalType === 'edit') {
      const newCard = {
        "id": parseInt(this.state.id),
        "name": {
          "english": this.state.name,
          "japanese": this.state.japane,
          "chinese": this.state.chines
        },
        "type": this.state.type,
        "base": {
          "HP": this.state.hp,
          "Attack": this.state.attack_level,
          "Defense": this.state.defense_level,
          "Sp. Attack": 0,
          "Sp. Defense": 0,
          "Speed": 0
        }
      };
      this.props.createCard(newCard, 'update');
    } else {
      const newCard = {
        "id": this.state.id,
        "name": {
          "english": this.state.name,
          "japanese": "",
          "chinese": ""
        },
        "type": [
          this.state.type
        ],
        "base": {
          "HP": this.state.hp,
          "Attack": this.state.attack_level,
          "Defense": this.state.defense_level,
          "Sp. Attack": 0,
          "Sp. Defense": 0,
          "Speed": 0
        }
      };
      this.props.createCard(newCard, 'new');
    }
    this.toggle();
  }
  render() {
    return (
      <div className="modal">
<Modal isOpen={this.state.modal}>
        {this.state.modalType === 'edit' ? <div>
              <ModalHeader>Edit Pokemon Details</ModalHeader>
              <ModalBody>
              <div className="row">
                  <div className="form-group col-12">
                    <input type="text" value={this.state.name} name="name" placeholder="Enter Name" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                  <div className="form-group col-12">
                    <input type="text" value={this.state.hp} name="hp" placeholder="Enter HP" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                  <div className="form-group col-12">
                    <input type="text" value={this.state.attack_level} name="attack_level" placeholder="Enter Attack Level" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                  <div className="form-group col-12">
                    <input type="text" value={this.state.defense_level} name="defense_level" placeholder="Enter Defense Level" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
              </div>
              </ModalBody>
              <ModalFooter>
                <button type="button" className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                <button className="btn btn-primary" onClick={this.toggle}>Cancel</button>
              </ModalFooter></div> : <div>
          {this.state.modalType === 'view' ?
            <div>
              <ModalHeader>Pokemon Details</ModalHeader>
              <ModalBody>
                <div className="row">
                  <div className="form-group col-12">
                    <p>Name: {this.state.data.name['english']}</p>
                    <p>Other Name: {this.state.data.name['japanese']}, {this.state.data.name['chinese']} </p>
                  </div>
                  <div className="form-group col-12">
                    <p>Type: {this.state.data.type.map((typ, index) => { return <span className="pokemon-type" key={index}>{typ}</span> })}</p>
                  </div>
                  <div className="form-group col-12">
                    <p>HP: {this.state.data.base['HP']}</p>
                    <p>Attack: {this.state.data.base['Attack']}</p>
                    <p>Defense: {this.state.data.base['Defense']}</p>
                    <p>Speed: {this.state.data.base['Speed']}</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={this.toggle}>Cancel</button>
              </ModalFooter></div>
            :
            <div>
              <ModalHeader>Add New Pokemon</ModalHeader>
              <ModalBody>
                <div className="row">
                  <div className="form-group col-12">
                    <input type="text" value={this.state.name} name="name" placeholder="Enter Name" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                  <div className="form-group col-12">
                    <input type="text" value={this.state.type} name="type" placeholder="Enter type" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                  <div className="form-group col-12">
                    <input type="text" value={this.state.attack_level} name="attack_level" placeholder="Enter Attack Level" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                  <div className="form-group col-12">
                    <input type="text" value={this.state.defense_level} name="defense_level" placeholder="Enter Defense Level" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                  <div className="form-group col-12">
                    <textarea value={this.state.description} placeholder="Enter description" name="description" onChange={(e) => this.handleChangeName(e)} className="form-control" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <button type="button" className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                <button className="btn btn-primary" onClick={this.toggle}>Cancel</button>
              </ModalFooter></div>}</div>}
        </Modal>
      </div>
    )
  }
}
