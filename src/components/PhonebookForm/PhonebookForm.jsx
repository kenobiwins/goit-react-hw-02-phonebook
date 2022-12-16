import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Label, Input } from './PhonebookForm.styled';
import { Button } from 'components/BaseStyles/BaseStyles.styled';

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { onSubmit } = this.props;
    const { name, number } = this.state;
    return (
      <Form
        onSubmit={e => {
          onSubmit(e, this.state, this.reset);
        }}
        autoComplete="off"
      >
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInput}
          value={name}
        />
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInput}
          value={number}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

PhonebookForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
};
