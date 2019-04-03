import React, { Component } from 'react';
import './App.css';
import{ Auth } from './Components/Auth/Auth';
import{ Form } from './Components/Form/Form';
import{ Nav } from './Components/Nav/Nav';
import{ Post } from './Components/Post/Post';
import{ Dashboard } from './Components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth/>
        <Form/>
        <Nav/>
        <Post/>
        <Dashboard/>
    
      </div>
    );
  }
}

export default App;
