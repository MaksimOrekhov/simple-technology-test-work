import React, {Component} from 'react'


class EmailInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {


    return (
      <div className={this.props.showRole ? "email-input__wrapper" : "email-input__wrapper-hidden"}>
        <label className="email-input" htmlFor="email-input">
          <span className="email-input__title">Email контрагента </span>
          <input type="text" id="email-input" onChange={this.handleNameChange}/>
        </label>
      </div>
    )
  }
}

  export default EmailInput