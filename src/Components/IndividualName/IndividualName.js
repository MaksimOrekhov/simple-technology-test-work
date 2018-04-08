import React, {Component} from 'react'

class IndividualName extends Component {

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
    return (
      <label className="add__form-label" htmlFor="name">
      <span className="add__form-label__title">Имя</span>
      <input id="name" className={this.state.nameError ? "error" : "name"} placeholder="Имя" onChange={this.nameValue}/>
      </label>
    )
  }
}

export default IndividualName