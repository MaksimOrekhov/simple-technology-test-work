import React, {Component} from 'react'

class IndividualBirthDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: ' ',
      error: false // вывод сообщения о необходимости быть старше 18 лет
    }
  }

  dateValue = (e) => {
    this.setState({
      date: e.target.value,
      error: false
    });
    this.props.dateValue(e);
    // валидация даты и проверка 
    let today = new Date()
    let currentYear = today.getFullYear();
    let date = this.state.date;
    let birthYear = date.split("-");
    if (birthYear[0] >= (currentYear - 18)) {
      this.setState({
        error: true
      });
      this.props.errorBirthDate();
    } else {
      this.props.validatedBirthDate();
      this.setState({
        error: false
      }) 
    }
  }

  render() {
    return (
      <div>
        <label className="add__form-label" htmlFor="birth__date">
          <span className="add__form-label__title">Дата рождения</span>
          <input className={this.state.error ? "error" : "birth__date"} id="birth__date" type="date" onChange={this.dateValue}/>
        </label>
        <div className={this.state.error ? "error__visible" : "error__hidden"}>Вы должны быть старше 18 лет</div>
      </div>
    )
  }
}

export default IndividualBirthDate