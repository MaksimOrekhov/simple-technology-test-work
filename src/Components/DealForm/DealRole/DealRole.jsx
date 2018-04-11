import React from 'react'

class DealRole extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }

  customerChecked = (e) => {
    this.props.customerChecked(e)
  }

  contractorChecked = (e) => {
    this.props.contractorChecked(e)
  }

  render() {
    return (
      <div className="deal-role__wrapper">
        <div>Ваша роль в сделке</div>
        <label htmlFor="customer">
          <input type="radio" id="customer" name="deal__role" onChange={this.customerChecked} defaultChecked={this.state.checked}/>
          <span className={this.props.showProductRole ? "radio__title" : "radio__title-hidden"}>покупатель</span>
          <span className={this.props.showServiceRole ? "radio__title" : "radio__title-hidden"}>заказчик</span>
        </label>
        <label htmlFor="contractor">
          <input type="radio" id="contractor" name="deal__role" onChange={this.contractorChecked}/>
          <span className={this.props.showProductRole ? "radio__title" : "radio__title-hidden"}>продавец</span>
          <span className={this.props.showServiceRole ? "radio__title" : "radio__title-hidden"}>исполнитель</span>
        </label>
      </div>
    )
  }
}

export default DealRole