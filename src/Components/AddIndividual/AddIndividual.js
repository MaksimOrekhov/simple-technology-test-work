import React, {Component} from 'react'
import IndividualLastName from '../IndividualLastName/IndividualLastName'
import IndividualName from '../IndividualName/IndividualName'
import IndividualMiddleName from '../IndividualMiddleName/IndividualMiddleName'
import IndividualBirthDate from '../IndividualBirthDate/IndividualBirthDate'

class AddIndividual extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameError: false,
      lastNameError: false,
      middleNameError: false,
      name: '',
      lastName: '',
      middleName: '',
      errorBirthDate: false
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

  addIndividual = (e) => {
    e.preventDefault();
    // проверка на пустые поля
    if (this.props.lastName === '') {
      this.setState({
        lastNameError: true
      })
    } else if (this.props.individualName === '') {
      this.setState({
        nameError: true
      })
    } else if (this.props.middleName === '') {
      this.setState({
        middleNameError: true
      })
    } else if (this.state.errorBirthDate === true) {
      return;
    } else {
      this.props.closeAddIndividual();
      this.props.sendName();
      this.props.sendLastName();
      this.props.sendMiddleName();
      this.props.sendBirthDate();
    };

  }

  render() {
    return (
      <div className={this.props.showAddIndividual ? "add-individual__wrapper" : "add-individual__wrapper-hidden"}>
        <div className="close__button" onClick={this.props.closeAddIndividual}>X</div>
        <div className="add-individual__title">Добавление физ лица</div>
        <div className="add__form">
        <IndividualLastName lastNameValue={this.props.lastNameValue}/>
        <IndividualName nameValue={this.props.nameValue}/>
        <IndividualMiddleName middleNameValue={this.props.middleNameValue}/>
        <IndividualBirthDate dateValue={this.props.dateValue} errorBirthDate={this.errorBirthDate} validatedBirthDate={this.validatedBirthDate}/>
        <button onClick={this.addIndividual} type="submit">Сохранить</button>
        </div>
      </div>
    )
  }
}

export default AddIndividual