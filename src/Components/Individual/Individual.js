import React, {Component} from 'react'

class Individual extends Component {

  render() {
    return (
      <div className={this.props.showRole ? "individual__wrapper" : "individual__wrapper-hidden"}>
       <div className="individual__title">Укажите кем Вы являетесь в сделке</div>
       <select className="individual__select">
        <option label="Ранее использованное"></option>
        <option>Физ лицо №1</option>
        <option>Физ лицо №2</option>
        <option>Физ лицо №3</option>
       </select>
       <button onClick={this.props.showAddIndividual}>Добавить физ лицо</button>
      </div>
    )
  }
}

export default Individual