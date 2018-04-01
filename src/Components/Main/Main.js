import React, {Component} from 'react'
import DealType from '../DealType/DealType'
import DealRole from '../DealRole/DealRole'
import NameInput from '../NameInput/NameInput'
import EmailInput from '../EmailInput/EmailInput'
import Individual from '../Individual/Individual'
import AddIndividual from '../AddIndividual/AddIndividual';
import ReactDOM from 'react-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      closeDeal: false,
      showRole: false,
      showProductRole: false,
      showServiceRole: false,
      showAddIndividual: false,
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      showMessage: false
    }
  }

  closeDeal = () => {
    this.setState({
      closeDeal: true
    })
  }

  displayProductRole = () => {
    this.setState({
      showRole: true,
      showProductRole: true,
      showServiceRole: false
    })
  }

  displayServiceRole = () => {
    this.setState({
      showRole: true,
      showProductRole: false,
      showServiceRole: true
    })
  }

  showAddIndividual = (e) => {
    e.preventDefault();
    this.setState({
      showAddIndividual: true
    })
  }

  closeAddIndividual = () => {
    this.setState({
      showAddIndividual: false
    })
  }

  nameChange = (val) => {
    this.setState({
      name: val.target.value
    })
  }

  emailChange = (val) => {
    this.setState({
      email: val.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    // валидация наименования товара/услуги
    let name = this.state.name;
    let nameLetters = name.split('');
    if (this.state.name === '' || nameLetters.length <= 2) {
      this.setState({
        nameError: true
      })
    } else {
      this.setState({
        nameError: false
      })
    }
    // валидация email
    var mailformat = this.state.email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    if (this.state.email === '' || !mailformat) {
      this.setState({
        emailError: true
      })
    } else {
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
    return (
      <div>
        <div className={this.state.closeDeal ? "wrapper-hidden" : "wrapper"}>
         <div className="main__title">Создание сделки</div>
         <div className="close__button" onClick={this.closeDeal}>X</div>
         <form className="deal__form" method="post">
          <DealType displayProductRole={this.displayProductRole} displayServiceRole={this.displayServiceRole}/>
          <DealRole showRole={this.state.showRole} showProductRole={this.state.showProductRole} showServiceRole={this.state.showServiceRole}/>
          <NameInput showRole={this.state.showRole} showProductRole={this.state.showProductRole} showServiceRole={this.state.showServiceRole} nameChange={this.nameChange} nameError={this.state.nameError}/>
          <EmailInput showRole={this.state.showRole} emailChange={this.emailChange} emailError={this.state.emailError} showMessage={this.state.showMessage}/>
          <Individual showRole={this.state.showRole} showAddIndividual={this.showAddIndividual}/>
          {ReactDOM.createPortal(
            <AddIndividual showAddIndividual={this.state.showAddIndividual} closeAddIndividual={this.closeAddIndividual}/>,
            document.getElementById('portal')
          )}
          <button className="submit__button" type="submit" onClick={this.submitForm}>Создать</button>
         </form>
        </div>
      </div>
    )
  }
}

export default Main