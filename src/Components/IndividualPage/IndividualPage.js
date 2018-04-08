import React, {Component} from 'react';
// import AddIndividual from '../AddIndividual/AddIndividual';

class IndividualPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddIndividual: false
    }
  }

  closeAddIndividual = () => {
    this.setState({
      showAddIndividual: false
    })
  }

  render() {
    return (
      <div className="individual-page__wrapper">
        {/* <AddIndividual closeAddIndividual={this.closeAddIndividual}/> */}
        <div>
          {this.props.lastNames.map((lastName, index) => <span key={index}>{lastName.lastName} </span>)}
        </div>
      </div>
    )
  }
}

export default IndividualPage