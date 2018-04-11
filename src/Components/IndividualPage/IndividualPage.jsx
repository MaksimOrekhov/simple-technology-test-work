import React from 'react';
import AddIndividualForm from '../AddIndividualForm/AddIndividualForm';

class IndividualPage extends React.Component {

  render() {
    return (
      <div className="individual-page__wrapper" >
        <AddIndividualForm  lastNameValue={this.props.lastNameValue}/>
      </div>
    )
  }
}

export default IndividualPage