import React, { Component } from 'react';
import Table from './Table';

export default class Repo extends Component {
  render() {
    const {reposchild,deletechild }=this.props
    const {id,title,status,language}=this.props.repo

    return (
        
       <tr>
          <td >{id}</td>
          <td >{title}</td>
          <td >{status}</td>
          <td ><input type="checkbox" /></td>
          <td >{""}</td>
          <td >{language}</td>
          <td><button onClick={deletechild.bind(this,id)}>Delete</button></td>
          </tr> 
    );
  }
}

