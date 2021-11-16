import React from 'react';
import { Component } from 'react';
import {Input, Button} from 'reactstrap';

class SearchIndex extends Component {
  constructor(props){
  super(props)
    this.state = {
      list: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      newList: []
    }

    this.searchFunction = this.searchFunction.bind(this)
  }

  searchFunction(value) {
    console.log(value);
    let newList = this.state.list.filter(result => result.includes(value.toLowerCase()))
      this.setState({
        newList: newList
      })
  }

  displaySearchItem = (newList, itemId) => <li key={itemId}>{newList}</li>

  render() {
    return(
      <div>
        <Input placeholder='Search Here' type='text' onChange={e => this.searchFunction(e.target.value)} />

        <h3 >Results:</h3>
        {this.state.newList && this.state.newList.length >0 ?
        this.state.newList.map(this.displaySearchItem) :
        this.state.list.map(this.displaySearchItem)}
        


      </div>
    )
  }
}
  
export default SearchIndex;