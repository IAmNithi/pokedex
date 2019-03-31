import React, { Component } from 'react'

export default class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchParam: ''
    }
  }
  changeEvent(e){
    this.setState({
      searchParam: e.target.value
    });
  }
  emitChange(e){
    this.props.onSubmit(this.state.searchParam);
  }
  render() {
    return (
      <div className="search-header">
  <div className="container text-center">
  <div className="row">
    <div className="col-md-6">
      <input type="text" onChange={(e) => this.changeEvent(e)} className="form-control" placeholder="Search PokeMon" />
    </div>
    <div className="col-md-6">
      <button className="btn btn-custom" onClick={(e) => this.emitChange(e)}>Search</button>
    </div>
  </div>
  </div>
</div>
    )
  }
}
