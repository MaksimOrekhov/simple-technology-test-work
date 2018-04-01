import React, {Component} from 'react'

class NameInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleNameChange = (val) => {
    this.props.nameChange(val)
  }
  
  render() {

    return (
      <div className={this.props.showRole ? "name-input__wrapper" : "name-input__wrapper-hidden"}>
        <label className="name-input" htmlFor="name-input">
          <span className="name-input__title">Наименование </span>
          <span className={this.props.showProductRole ? "input__title" : "input__title-hidden"}>товара</span>
          <span className={this.props.showServiceRole ? "input__title" : "input__title-hidden"}>услуги</span>
          <input type="text" id="name-input" onChange={this.handleNameChange} className={this.props.nameError ? "error" : "name"}/>
        </label>
      </div>
    )
  }
}

  export default NameInput