import React from 'react';
import classNames from 'classnames';


class EmailInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '', // наименование email
      emailError: true,
      showMessage: false
    }
  }

  handleInput = (val) => {
    this.setState({
      email: val.target.value
    });

    // валидация email
    let mailformat = this.state.email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{1,2})+$/);
    if (this.state.email === '' || !mailformat) {
      this.props.emailNotValidate(val);
      this.setState({
        emailError: true
      })
    } else {
      this.props.emailValidate(val);
      this.setState({
        emailError: false,
        showMessage: true
      })
      setTimeout(() => {
        this.setState({
          showMessage: false
        })
      }, 2500);
  }
}

  render() {

    let inputClasses = classNames({
      "error": this.state.emailError === true,
      "email-valid": this.state.emailError === false,
      "email": this.state.email === ''
    })

    return (
      <div className="email-input__wrapper">
        <label className="email-input" htmlFor="email-input">
          <span className="email-input__title">Email контрагента </span>
          <input type="text" id="email-input" placeholder="example@email.com" onChange={this.handleInput} className={inputClasses}/>
          <div className={this.state.showMessage ? "email-new" : "email-new__hidden"}>Email нет в базе. Вам будет выслано приглашение.</div>
        </label>
      </div>
    )
  }
}

  export default EmailInput