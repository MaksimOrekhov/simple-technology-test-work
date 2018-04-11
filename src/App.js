import React, { Component } from 'react';
import './styles/App.css';
import DealForm from './Components/DealForm/DealForm.jsx';
import { Switch, Route } from 'react-router-dom';
// import IndividualPage from './Components/IndividualPage/IndividualPage';
import AddIndividualForm from './Components/AddIndividualForm/AddIndividualForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={DealForm}/>
          <Route path='/individuals' component={AddIndividualForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
