import React, {Component} from 'react'

class NameInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '', // наименование товара/услуги
      nameError: true
    }
  }

  handleInput = (val) => {
    this.setState({
      name: val.target.value
    });
    // валидация наименования товара/услуги
    let name = this.state.name;
    let nameLetters = name.split('');
    if (this.state.name === '' || nameLetters.length <= 2) {
      this.props.nameNotValidate(val);
      this.setState({
        nameError: true
      })
    } else {
      this.props.nameValidate(val);
      this.setState({
        nameError: false
      })
    }
  }
  
  render() {

    return (
      <div className="name-input__wrapper">
        <label className="name-input" htmlFor="name-input">
          <div className="name-input__title-wrapper">
            <span className="name-input__title">Наименование </span>
            <span className={this.props.showProductRole ? "input__title" : "input__title-hidden"}>товара</span>
            <span className={this.props.showServiceRole ? "input__title" : "input__title-hidden"}>услуги</span>
          </div>
          <input type="text" id="name-input" onChange={this.handleInput} className={this.state.nameError ? "error" : "name-validate"}/>
        </label>
      </div>
    )
  }
}

  export default NameInput