import React, {Component} from 'react';
import './Edit_popup.css';

export default class Edit_popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
    };
  }

  edit_data(e) {
    e.preventDefault();

    const user_data = {
      name: this.state.name,
      phone: this.state.phone,
      id: this.props.edit_id
    };

    this.props.edit(user_data);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePhoneChange(e) {
    this.setState({
      phone: e.target.value
    });
  }

  render() {
    let popup_class = '';

    if (this.props.visible === true) {
      popup_class = 'list-popup active';
    }
    else {
      popup_class = 'list-popup';
    }

    return (
      <div className={popup_class}>
        <form>
          <input type='text' placeholder='Name' name='user-name' value={this.state.name} onChange={(e) => this.handleNameChange(e)} />
          <input type='tel' placeholder='Phone' name='user-phone' value={this.state.phone} onChange={(e) => this.handlePhoneChange(e)} />
          <button onClick={(e) => this.edit_data(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
