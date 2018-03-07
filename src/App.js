import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {text:''};
    }
  UbahText(x){
  this.setState({text: x});
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Soal no 1</h1>
        </header>
        <Tabs>
    <div className="container-fluid">
    <div className="row">
    <TabList className='unstyletab'>
      <Tab ><button className='contenttab'><h2>Input</h2></button></Tab>
      <Tab ><button className='contenttab'><h2 >Result</h2></button></Tab>
    </TabList>
    </div>
    </div>

    <TabPanel>
      <h2>Input something</h2>
      <input ref='textuser' type='text'/>
      <button onClick={()=>{this.UbahText(this.refs.textuser.value)}}>Submit</button>   
    </TabPanel>
    <TabPanel>
      <h2>{this.state.text}</h2>
    </TabPanel>
    </Tabs>
      </div>
    );
  }
}

export default App;
