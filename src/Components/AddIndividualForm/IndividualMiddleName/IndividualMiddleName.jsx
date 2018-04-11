import React from 'react';
import classNames from 'classnames';

class IndividualMiddleName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      middleNameError: true,
      middleName: ''
    }
  }

  middleNameValue = (e) => {
    this.setState({
      middleName: e.target.value,
      middleNameError: false
    });

    // валидация первой буквы отчества и валидация на кириллицу
    let middleName = this.state.middleName;
    let middleNameLetters = middleName.split('');
    if (this.state.middleName === '' || middleNameLetters[0].toUpperCase() !== middleNameLetters[0] || this.state.middleName.search(/[а-яё]/i) < 0) {
      this.setState({
        middleNameError: true
      })
    } else {
      this.setState({
        middleNameError: false
      });
      this.props.middleNameValue(e);
    }
  }

  render() {

    let inputClasses = classNames({
        "error": this.state.middleNameError === true,
        "middle__name-valid": this.state.middleNameError === false,
        "middle__name": this.state.middleName === ''
    })

    return (
      <label className="add__form-label" htmlFor="middle__name">
        <span className="add__form-label__title">Отчество</span>
        <input name="middleName" id="middle__name" className={inputClasses} placeholder="Отчество" onChange={this.middleNameValue}/>
      </label>
    )
  }
}

export default IndividualMiddleName