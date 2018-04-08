import React, {Component} from 'react'


class DealType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }

  productChecked = (e) => {
    this.props.productChecked(e)
  }

  serviceChecked = (e) => {
    this.props.serviceChecked(e)
  }

  render() {
    return (
      <div className="deal-type__wrapper">
        <div className="deal-type__title">Тип сделки</div>
        <label className="product" htmlFor="product" onClick={this.props.displayProductRole}>
          <input type="radio" id="product" name="deal__type" onChange={this.productChecked} defaultChecked={this.state.checked}/>
          <span className="radio__title">товар</span>
        </label>
        <label className="service" htmlFor="service" onClick={this.props.displayServiceRole}>
          <input type="radio" id="service" name="deal__type" onChange={this.serviceChecked} />
          <span className="radio__title">услуга</span>
        </label>
      </div>
    )
  }
}

  export default DealType