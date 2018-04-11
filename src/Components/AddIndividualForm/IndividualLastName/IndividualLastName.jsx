import React from 'react';
import classNames from 'classnames';

class IndividualLastName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastNameError: true,
      lastName: ''
    }
  }

  lastNameValue = (e) => {
    this.setState({
      lastName: e.target.value,
      lastNameError: false
    });

    // валидация первой буквы имени и валидация на кириллицу
    let lastName = this.state.lastName;
    let lastNameLetters = lastName.split('');
    if (this.state.lastName === '' || lastNameLetters[0].toUpperCase() !== lastNameLetters[0] || this.state.lastName.search(/[а-яё]/i) < 0) {
      this.setState({
        lastNameError: true
      })
    } else {
      this.setState({
        lastNameError: false
      });
      this.props.lastNameValue(e);
    }
  }

  render() {

    let inputClasses = classNames({
        "error": this.state.lastNameError === true,
        "last__name-valid": this.state.lastNameError === false,
        "last__name": this.state.lastName === ''
    })

    return (
      <label className="add__form-label" htmlFor="last__name">
        <span className="add__form-label__title">Фамилия</span>
        <input className={inputClasses} id="last__name" placeholder="Фамилия" onChange={this.lastNameValue}/>
      </label>
    )
  }
}

export default IndividualLastName