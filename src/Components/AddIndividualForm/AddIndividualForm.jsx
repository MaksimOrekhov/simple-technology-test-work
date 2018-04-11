import React from 'react'
import IndividualLastName from './IndividualLastName/IndividualLastName'
import IndividualName from './IndividualName/IndividualName'
import IndividualMiddleName from './IndividualMiddleName/IndividualMiddleName'
import IndividualBirthDate from './IndividualBirthDate/IndividualBirthDate'

class AddIndividual extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorBirthDate: false,
      showAddIndividual: true,
      lastName: '', // фамилия физ лица
      lastNames: [], // массив с фамилимями физ лиц
      individualName: '', // имя физ лица
      individualNames: [], // массив с именами физ лиц
      middleName: '', // отчество физ лица
      middleNames: [], // массив с отчествами физ лиц
      birthDate: '', // дата рождения физ лица
      birthDates: [], // массив с датами рождения физ лиц
      location: this.props.location.pathname
    }
  }

  errorBirthDate = () => {
    this.setState({
      errorBirthDate: true
    })
  }

  validatedBirthDate = () => {
    this.setState({
      errorBirthDate: false
    })
  }

  // запись в стейт фамилии физ лица
  lastNameValue = (e) => {
    if (this.state.location === '/individuals') {
      this.setState({
        lastName: e.target.value
      });
    } else if (this.props.location === '/') {
      this.props.lastNameValue(e)
    }
    
  }

  // запись в стейт имени физ лица
  nameValue = (e) => {
    if (this.state.location === '/individuals') {
      this.setState({
        individualName: e.target.value
      });
    } else if (this.props.location === '/') {
      this.props.nameValue(e)
    }
  }

  // запись в стейт отчества физ лица
  middleNameValue = (e) => {
    if (this.state.location === '/individuals') {
      this.setState({
        middleName: e.target.value
      });
    } else if (this.props.location === '/') {
      this.props.middleNameValue(e)
    }
  }

  // запись в стейт даты рождения физ лица
  dateValue = (e) => {
    if (this.state.location === '/individuals') {
      this.setState({
        birthDate: e.target.value
      })
    } else if (this.props.location === '/') {
      this.props.dateValue(e)
    }
    
  }

  // закрытие формы добавления физ лица
  closeAddIndividual = () => {
    if (this.state.location === '/individuals') {
      this.setState({
        showAddIndividual: false
      });
    } else if (this.props.location === '/') {
      this.props.closeAddIndividual()
    } 
  }

  // передача фамилии физ лица и запись его в массив
  sendLastName = () => {
    if (this.state.location === '/individuals') {
      let newLastName = {
        lastName: this.state.lastName
      };
      this.setState({
        lastNames: [...this.state.lastNames, newLastName]
      });
    } else if (this.props.location === '/') {
      this.props.sendLastName()
    }
  }

  // передача имени физ лица и запись его в массив
  sendName = () => {
    if (this.state.location === '/individuals') {
      let newName = {
        name: this.state.individualName
      };
      this.setState({
        individualNames: [...this.state.individualNames, newName]
      });
    } else if (this.props.location === '/') {
      this.props.sendName()
    }
  } 

  // передача отчества физ лица и запись его в массив
  sendMiddleName = () => {
    if (this.state.location === '/individuals') {
      let newMiddleName = {
        middleName: this.state.middleName
      };
      this.setState({
        middleNames: [...this.state.middleNames, newMiddleName]
      });
    } else if (this.props.location === '/') {
      this.props.sendMiddleName()
    }
  }

  // передача даты рождения физ лица и запись его в массив
  sendBirthDate = () => {
    if (this.state.location === '/individuals') {
      let newBirthDate = {
        birthDate: this.state.birthDate
      };
      this.setState({
        birthDates: [...this.state.birthDates, newBirthDate]
      });
    } else if (this.props.location === '/') {
      this.props.sendBirthDate()
    }
  }

  addIndividual = (e) => {
    e.preventDefault();
    console.log(this.state.lastName)
    // проверка на пустые поля формы для добавления физ лица
    // if (this.state.lastName === '') {
    //   return;
    // } else if (this.state.individualName === '') {
    //   return;
    // } else if (this.state.middleName === '') {
    //   return;
    // } else if (this.state.errorBirthDate === true || this.state.birthDate === '') {
    //   return;
    // } else {
      this.closeAddIndividual();
      this.sendName();
      this.sendLastName();
      this.sendMiddleName();
      this.sendBirthDate();
    // } 
  }

  render() {
    return (
      <div className={this.props.showAddIndividual ? "add-individual__wrapper" : "add-individual__wrapper-hidden"}>
        <div className="close__button" onClick={this.closeAddIndividual}>X</div>
        <div className="add-individual__title">Добавление физ лица</div>
        <div className="add__form">
        <IndividualLastName lastNameValue={this.lastNameValue}/>
        <IndividualName nameValue={this.nameValue}/>
        <IndividualMiddleName middleNameValue={this.middleNameValue}/>
        <IndividualBirthDate dateValue={this.dateValue} errorBirthDate={this.errorBirthDate} validatedBirthDate={this.validatedBirthDate}/>
        <button onClick={this.addIndividual} type="submit">Сохранить</button>
        </div>
      </div>
    )
  }
}

export default AddIndividual