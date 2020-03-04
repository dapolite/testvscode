import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.jsx';
import logo_sudh from './assets/SUDH_logo_1.png';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col-md-6 App-header">
        <style dangerouslySetInnerHTML = {{__html: `
      .styled { height: 100vh; }
    `}} />
        </div>
        <div className="col-md-6">
        <Form />
        </div>

      </div>
    );
  }
}

export default App;