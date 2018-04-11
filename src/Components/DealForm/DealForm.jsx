import React from 'react'
import DealType from './DealType/DealType'
import DealRole from './DealRole/DealRole'
import NameInput from './NameInput/NameInput'
import EmailInput from './EmailInput/EmailInput'
import IndividualSelect from './IndividualSelect/IndividualSelect'
import AddIndividualForm from '../AddIndividualForm/AddIndividualForm';


class DealForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closeDeal: false, // закрытие формы сделки
      showProductRole: true, // отображение покупатель/продавец
      showServiceRole: false, // отображение заказчик/исполнитель
      showAddIndividual: false, // отображение формы добавления физ лица
      name: '', // наименование товара
      email: '', // email контрагента
      customer: true, 
      contractor: false,
      product: true,
      service: false,
      lastName: '', // фамилия физ лица
      lastNames: [], // массив с фамилимями физ лиц
      individualName: '', // имя физ лица
      individualNames: [], // массив с именами физ лиц
      middleName: '', // отчество физ лица
      middleNames: [], // массив с отчествами физ лиц
      birthDate: '', // дата рождения физ лица
      birthDates: [], // массив с датами рождения физ лиц
      nameValidate: false, // проверка на валидность наименования товара для активации кнопки Создать
      emailValidate: false, // проверка на валидность email для активации кнопки Создать
      location: this.props.location.pathname
    }
  }

  // обработка закрытия формы создания сделки
  closeDeal = () => {
    this.setState({
      closeDeal: true
    })
  }

  // обработка отображения радио-переключателей покупатель/продавец
  displayProductRole = () => {
    this.setState({
      showProductRole: true,
      showServiceRole: false
    })
  }

  // обработка отображения радио-переключателей заказчик/исполнитель
  displayServiceRole = () => {
    this.setState({
      showProductRole: false,
      showServiceRole: true
    })
  }

  // появление формы добавления физ лица
  showAddIndividual = (e) => {
    e.preventDefault();
    this.setState({
      showAddIndividual: true
    })
  }

  // закрытие формы добавления физ лица
  closeAddIndividual = () => {
    this.setState({
      showAddIndividual: false
    })
  }

  // проверка валидности имени товара и передача значения инпута
  nameValidate = (val) => {
    this.setState({
      name: val.target.value,
      nameValidate: true
    });
  }

  nameNotValidate = (val) => {
    this.setState({
      name: val.target.value,
      nameValidate: false
    });
  }

  // проверка валидности email и передача значения инпута
  emailValidate = (val) => {
    this.setState({
      email: val.target.value,
      emailValidate: true
    })
  }

  emailNotValidate = (val) => {
    this.setState({
      email: val.target.value,
      emailValidate: false
    });
  }

  // запись в стейт актывных радио-переключателей
  customerChecked = (e) => {
    this.setState({
      customer: true,
      contractor: false
    })
  }

  contractorChecked = (e) => {
    this.setState({
      customer: false,
      contractor: true
    })
  }

  productChecked = (e) => {
    this.setState({
      product: true,
      service: false
    })
  }

  serviceChecked = (e) => {
    this.setState({
      product: false,
      service: true
    })
  }

  // запись в стейт фамилии физ лица
  lastNameValue = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  // запись в стейт имени физ лица
  nameValue = (e) => {
    this.setState({
      individualName: e.target.value
		});
  }

  // запись в стейт отчества физ лица
  middleNameValue = (e) => {
    this.setState({
      middleName: e.target.value
    })
  }

  // запись в стейт даты рождения физ лица
  dateValue = (e) => {
    this.setState({
      birthDate: e.target.value
    })
  }

  selectChange = (e) => {
    // проверка соответствия фамилии в селекте и фамилии в массиве данных
    for (let i = 0; i < this.state.lastNames.length; i++) {
      if (e.target.value === this.state.lastNames[i].lastName) {
        this.setState({
          lastName: this.state.lastNames[i].lastName,
          individualName: this.state.individualNames[i].name,
          middleName: this.state.middleNames[i].middleName,
          birthDate: this.state.birthDates[i].birthDate
        })
      } 
    }
  }

  // передача фамилии физ лица и запись его в массив
  sendLastName = () => {
    let newLastName = {
			lastName: this.state.lastName
    };
    this.setState({
			lastNames: [...this.state.lastNames, newLastName]
		});
  }

  // передача имени физ лица и запись его в массив
  sendName = () => {
    let newName = {
			name: this.state.individualName
    };
    this.setState({
			individualNames: [...this.state.individualNames, newName]
    });
  } 

  // передача отчества физ лица и запись его в массив
  sendMiddleName = () => {
    let newMiddleName = {
			middleName: this.state.middleName
    };
    this.setState({
			middleNames: [...this.state.middleNames, newMiddleName]
		});
  }

  // передача даты рождения физ лица и запись его в массив
  sendBirthDate = () => {
    let newBirthDate = {
			birthDate: this.state.birthDate
    };
    this.setState({
			birthDates: [...this.state.birthDates, newBirthDate]
		});
  }


  handleSubmit = (e) => {
    e.preventDefault();
      let data = {
        "DATA": {
          "DEAL": {
            "TYPE": {
              "product": this.state.product,
              "service": this.state.service
            },
            "ROLE": {
              "customer": this.state.customer,
              "contractor": this.state.contractor
            },
            "NAME": this.state.name,
            "EMAIL": this.state.email
          },
          "INDIVIDUAL": {
            "last_name": this.state.lastName,
            "individual_name": this.state.individualName,
            "middle_name": this.state.middleName,
            "birth_date": this.state.birthDate
          }
        }
      }
      
      let xhr = new XMLHttpRequest();

      let json = JSON.stringify({data});

      xhr.open("POST", 'http://localhost:3000', true)
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      xhr.send(json);
    }
        
  render() {
    return (
      <div>
        <div className={this.state.closeDeal ? "wrapper-hidden" : "wrapper"}>
         <div className="main__title">Создание сделки</div>
         <div className="close__button" onClick={this.closeDeal}>X</div>
         <form className="deal__form" method="post" action="">
          <DealType displayProductRole={this.displayProductRole} displayServiceRole={this.displayServiceRole} productChecked={this.productChecked} serviceChecked={this.serviceChecked}/>
          <DealRole showRole={this.state.showRole} showProductRole={this.state.showProductRole} showServiceRole={this.state.showServiceRole} customerChecked={this.customerChecked} contractorChecked={this.contractorChecked}/>
          <NameInput showRole={this.state.showRole} showProductRole={this.state.showProductRole} showServiceRole={this.state.showServiceRole} nameValidate={this.nameValidate} nameNotValidate={this.nameNotValidate}/>
          <EmailInput showRole={this.state.showRole} emailValidate={this.emailValidate} emailNotValidate={this.emailNotValidate}/>
          <IndividualSelect showRole={this.state.showRole} showAddIndividual={this.showAddIndividual} selectChange={this.selectChange} individualName={this.state.individualName} lastNames={this.state.lastNames} individualNames={this.state.individualNames} middleNames={this.state.middleNames} />
          <AddIndividualForm showAddIndividual={this.state.showAddIndividual} closeAddIndividual={this.closeAddIndividual} lastNameValue={this.lastNameValue} middleNameValue={this.middleNameValue} nameValue={this.nameValue} dateValue={this.dateValue} lastName={this.state.lastName} individualName={this.state.individualName} middleName={this.state.middleName} lastNames={this.state.lastNames} individualNames={this.state.individualNames} middleNames={this.state.middleNames} sendLastName={this.sendLastName} sendName={this.sendName} sendMiddleName={this.sendMiddleName} sendBirthDate={this.sendBirthDate} location={this.state.location}/>
          <button disabled={!this.state.nameValidate || !this.state.emailValidate} className="submit__button" type="submit" onClick={this.handleSubmit}>Создать</button>
         </form>
        </div>
      </div>
    )
  }
}

export default DealForm