import React, {Component} from 'react';
import './List_item.css';

export default class List_item extends Component {
  render() {

    return (
    		<li className='list-item'>
    			<div className='list-item-name'>{this.props.name}</div>
    			<div className='list-item-phone'>{this.props.phone}</div>
    			<div className='list-item-buttons'>
    				<div className='list-item-buttons-edit' onClick={() => this.props.editTrigger(this.props.id)}>Edit</div>
    				<div className='list-item-buttons-delete' onClick={() => this.props.delete(this.props.id)}>Delete</div>
    			</div>
    		</li>
    );
  }
}
