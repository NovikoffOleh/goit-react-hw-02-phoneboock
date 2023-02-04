import React, { Component } from 'react';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hanldeChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label>
          Ім'я
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.hanldeChange}
            placeholder="Ім'я..."
            required
          />
        </label>
        <label>
          Номер
          <input
            type="phone"
            name="number"
            value={number}
            onChange={this.hanldeChange}
            placeholder="Номер..."
            required
          />
        </label>
        <button type="submit" className={s.btnForm}>
          Додати контакт
        </button>
      </form>
    );
  }
}

export default ContactForm;
