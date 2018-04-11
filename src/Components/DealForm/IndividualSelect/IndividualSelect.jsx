import React from 'react'

class IndividualSelect extends React.Component {
  
  selectChange = (e) => {
    this.props.selectChange(e)
  }

  render() {
    return (
      <div className="individual__wrapper">
       <div className="individual__title">Укажите кем Вы являетесь в сделке</div>
       <select className="individual__select" onChange={this.selectChange}>
       {this.props.lastNames.map((lastName, index) => <option key={index}>{lastName.lastName}</option>)}
       </select>
       <button onClick={this.props.showAddIndividual}>Добавить физ лицо</button>
      </div>
    )
  }
}

export default IndividualSelect