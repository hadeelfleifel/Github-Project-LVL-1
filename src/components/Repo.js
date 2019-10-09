import React, { Component } from 'react';
import Table from './Table';

export default class Repo extends Component {
  render() {
    const {reposchild }=this.props
    const {id,title,status,language}=this.props.repo

    return (
      <div style={{ border: '3px red solid' }}>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{status}</td>
          <td>{language}</td>
          </tr>
      </div>
    );
  }
}