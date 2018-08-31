import React, {Component} from 'react';
import List_item from '../List-item/List_item.js';
import Edit_popup from '../Edit-popup/Edit_popup.js';
import List_menu from '../List-menu/List_menu.js';
import './List.css';

var dummy_data = [
  {
    name: 'Oleg',
    phone: '+38(067)8881111',
    id: 0
  },
  {
    name: 'Bobby',
    phone: '+1(062)7770663',
    id: 1
  },
  {
    name: 'Kim',
    phone: '+43(027)7770673',
    id: 2
  },
  {
    name: 'Tim',
    phone: '+44(88)7770000',
    id: 3
  }
];

export default class List extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.sort = this.sort.bind(this);
    this.search = this.search.bind(this);
    this.PopupTrigger = this.PopupTrigger.bind(this);

    this.state = {
      users: dummy_data,
      popup_visible: false,
      popup_edditing_id: null,
      search_term: ''
    };
  }

  delete(id) {
    let users_data = this.state.users;
    
    users_data = users_data.filter((user, index) => {
      if (user.id === id) {
        return false;
      }
      else {
        return user;
      }
    });

    this.setState({
      users: users_data
    });
  }

  sort() {
    let users = this.state.users;

    users.sort((a, b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });

    this.setState({
      users: users
    });
  }

  edit(data) {
    let users_data = this.state.users;

    if (this.state.popup_edditing_id !== null) {
      if (data.name !== '') {
        users_data[data.id].name = data.name;
      }
      if (data.phone !== '') {
        users_data[data.id].phone = data.phone;
      }

      this.setState({
        popup_visible: false,
        popup_edditing_id: null,
        users: users_data
      });
    }
    else {
      let user_id = users_data.length;

      for (let i = 0; i < users_data.length; i++) {
        if (users_data[i].id === user_id) {
          user_id++;
          i = 0;
        }
      }

      let new_user = {
        name: data.name,
        phone: data.phone,
        id: user_id
      };

      users_data.push(new_user);

      this.setState({
        popup_visible: false,
        popup_edditing_id: null,
        users: users_data
      });
    }

  }

  PopupTrigger(index) {
    this.setState({
      popup_visible: true,
      popup_edditing_id: index
    });
  }

  search(e) {
    const search = e.target.value;

    this.setState({
      search_term: search
    });
  }

  render() {
    let users = this.state.users;

    users = users.map((user, index) => {
      if (user.name.toLowerCase().indexOf(this.state.search_term.toLowerCase()) === 0) {
        return user;
      }
      else {
        return undefined;
      }
    });

    // remove undefinded elements
    users = users.filter(function( element ) {
      return element !== undefined;
    });

    const List_Items = users.map((user, index) => {
      return (
        <List_item 
          key={user.id} 
          id={user.id} 
          name={user.name} 
          phone={user.phone} 
          delete={this.delete} 
          editTrigger={this.PopupTrigger}
        />
      );
    });

    return (
    	<div>
        <List_menu 
          search={this.search}
          sort={this.sort}
          addTrigger={this.PopupTrigger}
        />

        <ul className='list'>
          {List_Items}
        </ul>

        <Edit_popup 
          edit_id={this.state.popup_edditing_id} 
          visible={this.state.popup_visible} 
          edit={this.edit} 
          add={this.add}
          // func={this.state.}
        />
      </div>
    );
  }
}
