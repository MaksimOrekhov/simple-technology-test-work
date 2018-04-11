import React from 'react';
import classNames from 'classnames';

class IndividualName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameError: true,
      name: ''
    }
  }

  nameValue = (e) => {
    this.setState({
      name: e.target.value,
      nameError: false
    });

    // валидация первой буквы имени и валидация на кириллицу
    let name = this.state.name;
    let nameLetters = name.split('');
    if (this.state.name === '' || nameLetters[0].toUpperCase() !== nameLetters[0] || this.state.name.search(/[а-яё]/i) < 0) {
      this.setState({
        nameError: true
      })
    } else {
      this.setState({
        nameError: false
      });
      this.props.nameValue(e)
    }
  }

  render() {

    let inputClasses = classNames({
        "error": this.state.nameError === true,
        "name-valid": this.state.nameError === false,
        "name": this.state.name === ''
    })

    return (
      <label className="add__form-label" htmlFor="name">
      <span className="add__form-label__title">Имя</span>
      <input id="name" className={inputClasses} placeholder="Имя" onChange={this.nameValue}/>
      </label>
    )
  }
}

export default IndividualName