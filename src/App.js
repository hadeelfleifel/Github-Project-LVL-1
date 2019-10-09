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

  deleterepo=(id)=>{
    let afterdelete = this.state.repos.filter((element)=>{return element.id !== id})
    this.setState({repos:afterdelete})
  }
  render() {
    const {repos}=this.state
    const {deleterepo}=this
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Add/>
       <Table reposparent={repos} deleteparent={deleterepo}/>
      
      </div>
    );
  }
}
