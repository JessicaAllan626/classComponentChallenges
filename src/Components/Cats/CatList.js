import React, { Component } from 'react';

class CatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: this.props.breeds
    }
  }

  render() {
    return (
      <div>
        {this.props.breeds.map((cat) => <li>{cat}</li> )}
      </div>
    )
    }
  }

export default CatList;
