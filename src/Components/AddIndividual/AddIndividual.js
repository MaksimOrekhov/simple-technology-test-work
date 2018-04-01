import React, {Component} from 'react'

class AddIndividual extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      error: false,
      nameError: false,
      lastNameError: false,
      middleNameError: false,
      name: '',
      lastName: '',
      middleName: ''
    }
  }

  dateValue = (e) => {
    this.setState({
      date: e.target.value,
      error: false
    })
  }

  nameValue = (e) => {
    this.setState({
      name: e.target.value,
      nameError: false
    })
  }

  lastNameValue = (e) => {
    this.setState({
      lastName: e.target.value,
      lastNameError: false
    })
  }

  middleNameValue = (e) => {
    this.setState({
      middleName: e.target.value,
      middleNameError: false
    })
  }

  addIndividual = (e) => {
    e.preventDefault();
    this.setState({
      error: false
    })
    // валидация даты
    let today = new Date()
    let currentYear = today.getFullYear();
    let date = this.state.date;
    let birthYear = date.split("-");
    if (birthYear[0] >= (currentYear - 18)) {
      this.setState({
        error: true
      })
    }

    // валидация первой буквы имени и валидация на кириллицу
    let lastName = this.state.lastName;
    let lastNameLetters = lastName.split('');
    if (this.state.lastName === '' || lastNameLetters[0].toUpperCase() !== lastNameLetters[0] || this.state.lastName.search(/[а-яё]/i) < 0) {
      this.setState({
        lastNameError: true
      })
    } else {
      this.setState({
        lastNameError: false
      })
    }

    let name = this.state.name;
    let nameLetters = name.split('');
    if (this.state.name === '' || nameLetters[0].toUpperCase() !== nameLetters[0] || this.state.name.search(/[а-яё]/i) < 0) {
      this.setState({
        nameError: true
      })
    } else {
      this.setState({
        nameError: false
      })
    }

    let middleName = this.state.middleName;
    let middleNameLetters = middleName.split('');
    if (this.state.middleName === '' || middleNameLetters[0].toUpperCase() !== middleNameLetters[0] || this.state.middleName.search(/[а-яё]/i) < 0) {
      this.setState({
        middleNameError: true
      })
    } else {
      this.setState({
        middleNameError: false
      })
    }
    
  }

  render() {
    return (
      <div className={this.props.showAddIndividual ? "add-individual__wrapper" : "add-individual__wrapper-hidden"}>
       <div className="add-individual__title">Добавление физ лица</div>
       <form className="add__form">
        <label className="add__form-label" htmlFor="last__name">
          <span className="add__form-label__title">Фамилия</span>
          <input className={this.state.lastNameError ? "error" : "last__name"} id="last__name" placeholder="Фамилия" onChange={this.lastNameValue}/>
        </label>
        <label className="add__form-label" htmlFor="name">
          <span className="add__form-label__title">Имя</span>
          <input id="name" className={this.state.nameError ? "error" : "name"} placeholder="Имя" onChange={this.nameValue}/>
        </label>
        <label className="add__form-label" htmlFor="middle__name">
          <span className="add__form-label__title">Отчество</span>
          <input id="middle__name" className={this.state.middleNameError ? "error" : "middle__name"} placeholder="Отчество" onChange={this.middleNameValue}/>
        </label>
        <label className="add__form-label" htmlFor="birth__date">
          <span className="add__form-label__title">Дата рождения</span>
          <input className={this.state.error ? "error" : "birth__date"} id="birth__date" type="date" onChange={this.dateValue}/>
        </label>
        <div className={this.state.error ? "error__visible" : "error__hidden"}>Вы должны быть старше 18 лет</div>
        <button onClick={this.addIndividual}>Сохранить</button>
       </form>
      </div>
    )
  }
}

export default AddIndividual