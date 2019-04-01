import React, { Component } from 'react'
import Card from './Card';
let count = 10;
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: props.userData,
      moreUserList: []
    };
  }
  componentWillMount() {
    if(this.state.userList.length > 10) {
      let addValue = [];
      for (let i = 0; i < count; i++) {
        addValue.push(this.state.userList[i])
      }
      this.setState({
        moreUserList: addValue
      });
    } else {
      this.setState({
        moreUserList: this.state.userList
      });
    }
  }
  componentWillReceiveProps(props){
    if(props.userData.length > 10) {
      let addValue = [];
      for (let i = 0; i < count; i++) {
        addValue.push(props.userData[i])
      }
      this.setState({
        moreUserList: addValue
      });
    } else {
      this.setState({
        moreUserList: props.userData
      });
    }
  }
  renderCard(idx, item) {
    return <div className="col-md-4" key={idx}>
      <Card items={item} />
    </div>;
  }
  addMore() {
    if (count < this.state.userList.length) {
      count += 10;
      let addValue = [];
      for (let i = 0; i < count; i++) {
        addValue.push(this.state.userList[i])
      }
      this.setState({
        moreUserList: addValue
      });
    } else {
      this.setState({
        moreUserList: this.state.userList
      });
    }

  }
  render() {
    return (
      <div className="body mt-4">
        <div className="container">
        {this.state.moreUserList.length !== 0 ? 
          <div className="row">
            {this.state.moreUserList.map((data, index) => {
              return this.renderCard(index, data);
            })}
            {this.state.moreUserList.length > 9 ? <div className="col-12 text-center mb-3">
              <button className="btn btn-primary btn-large" onClick={(e) => this.addMore(e)}>Show More</button>
            </div> : '' }
          </div> : 
          <div className="row">
        <div className="col-md-12 text-center">
        <h3>No Results Found</h3>
        </div>
        </div> }
        </div>
      </div>
    )
  }
}
