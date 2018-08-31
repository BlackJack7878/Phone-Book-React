import React, {Component} from 'react';
import './List_menu.css';

export default class List_menu extends Component {
  render() {

    return (
      <div className='list-menu'>
        <input type='text' placeholder='Search' onChange={(e) => this.props.search(e)} />
        <div>
        	<div className='list-menu-button' onClick={() => this.props.sort()}>Sort</div>
        	<div className='list-menu-button' onClick={() => this.props.addTrigger(null)}>Add</div>
        </div>
      </div>
    );
  }
}
