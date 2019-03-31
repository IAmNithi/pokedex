import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: this.props.items
    }
   }
  render() {
    return (
      <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">{this.state.cardData.name['english']}</h5>
              <p className="card-text">{this.state.cardData.name['japanese']}, {this.state.cardData.name['chinese']}</p>
              <p className="card-text tag">Type: {this.state.cardData.type.map((typ, index) => { return <span className="pokemon-type"  key={index}>{typ}</span>})}</p>
              <div className="restaurent-details">
                <div className="rating">Attack: {this.state.cardData.base['Attack']}</div>
                <div>Defense: {this.state.cardData.base['Defense']}</div>
                <div>HP: {this.state.cardData.base['HP']}</div>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
    )
  }
}
