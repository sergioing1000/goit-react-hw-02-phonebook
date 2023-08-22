import React, { Component } from 'react';
import style from './ContactForm.module.css';
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = name => e => {
    const { target } = e;

    this.setState(() => ({
      [name]: target.value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div className={style.inputContent}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <div className={style.inputsCont}>
            <p>Name : </p>

            <input
              value={this.state.name}
              onChange={this.handleChange("name")}
              type="text"
              name="name"
              pattern="[A-Za-z\s\-']+"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              className={style.input}
              required
            />
            <p>Number :</p>
            <input
              value={this.state.number}
              onChange={this.handleChange("number")}
              type="tel"
              name="number"
              pattern="[0-9\s\-\(\)+]+"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              className={style.input}
              required
            />
          </div>
          <button type="submit" className={style.buttonEditor}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
