import React, { Component } from 'react';
import Table from './components/Table';
import Add from './components/Add';


export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };
  render() {
    const {repos}=this.state
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Add/>
       <Table reposparent={repos}/>
      
      </div>
    );
  }
}
