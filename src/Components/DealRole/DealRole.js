import React, {Component} from 'react'

class DealRole extends Component {

  render() {
    return (
      <div className={this.props.showRole ? "deal-role__wrapper" : "deal-role__wrapper-hidden"}>
        <div>Ваша роль в сделке</div>
        <label htmlFor="customer">
          <input type="radio" id="customer" name="deal__role"/>
          <span className={this.props.showProductRole ? "radio__title" : "radio__title-hidden"}>покупатель</span>
          <span className={this.props.showServiceRole ? "radio__title" : "radio__title-hidden"}>заказчик</span>
        </label>
        <label htmlFor="contractor">
          <input type="radio" id="contractor" name="deal__role"/>
          <span className={this.props.showProductRole ? "radio__title" : "radio__title-hidden"}>продавец</span>
          <span className={this.props.showServiceRole ? "radio__title" : "radio__title-hidden"}>исполнитель</span>
        </label>
      </div>
    )
  }
}

export default DealRole