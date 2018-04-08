import React, {Component} from 'react'

class IndividualLastName extends Component {

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
    return (
      <label className="add__form-label" htmlFor="last__name">
        <span className="add__form-label__title">Фамилия</span>
        <input className={this.state.lastNameError ? "error" : "last__name"} id="last__name" placeholder="Фамилия" onChange={this.lastNameValue}/>
      </label>
    )
  }
}

export default IndividualLastName