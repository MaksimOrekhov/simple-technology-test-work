import React, {Component} from 'react'
import DealType from '../DealType/DealType'
import DealRole from '../DealRole/DealRole'
import NameInput from '../NameInput/NameInput'
import EmailInput from '../EmailInput/EmailInput'
import Individual from '../Individual/Individual'
import AddIndividual from '../AddIndividual/AddIndividual';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
     showRole: false,
     showProductRole: false,
     showServiceRole: false,
     showAddIndividual: false
    }
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

  showAddIndividual =(e) => {
    e.preventDefault();
    this.setState({
      showAddIndividual: true
    })
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
         <div className="main__title">Создание сделки</div>
         <form className="deal__form" method="post">
          <DealType displayProductRole={this.displayProductRole} displayServiceRole={this.displayServiceRole}/>
          <DealRole showRole={this.state.showRole} showProductRole={this.state.showProductRole} showServiceRole={this.state.showServiceRole}/>
          <NameInput showRole={this.state.showRole} showProductRole={this.state.showProductRole} showServiceRole={this.state.showServiceRole}/>
          <EmailInput showRole={this.state.showRole} />
          <Individual showRole={this.state.showRole} showAddIndividual={this.showAddIndividual}/>
          <AddIndividual showAddIndividual={this.state.showAddIndividual}/>
          <button className="submit__button" type="submit">Создать</button>
         </form>
        </div>
      </div>
    )
  }
}

export default Main