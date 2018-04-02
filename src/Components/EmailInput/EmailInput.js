import React, {Component} from 'react'


class EmailInput extends Component {

  handleEmailChange = (val) => {
    this.props.emailChange(val)
  }

  render() {
    return (
      <div className={this.props.showRole ? "email-input__wrapper" : "email-input__wrapper-hidden"}>
        <label className="email-input" htmlFor="email-input">
          <span className="email-input__title">Email контрагента </span>
          <input type="text" id="email-input" placeholder="example@email.com" onChange={this.handleEmailChange} className={this.props.emailError ? "error" : "email"}/>
          <div className={this.props.showMessage ? "email-new" : "email-new__hidden"}>Email нет в базе. Вам будет выслано приглашение.</div>
        </label>
      </div>
    )
  }
}

  export default EmailInput