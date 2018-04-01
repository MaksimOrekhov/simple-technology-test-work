import React, {Component} from 'react'

class NameInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleNameChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value},
      () => { this.validateField(name, value) }
    );
  }
  
  render() {

    return (
      <div className={this.props.showRole ? "name-input__wrapper" : "name-input__wrapper-hidden"}>
        <label className="name-input" htmlFor="name-input">
          <span className="name-input__title">Наименование </span>
          <span className={this.props.showProductRole ? "input__title" : "input__title-hidden"}>товара</span>
          <span className={this.props.showServiceRole ? "input__title" : "input__title-hidden"}>услуги</span>
          <input type="text" id="name-input" onChange={this.handleNameChange}/>
        </label>
      </div>
    )
  }
}

  export default NameInput