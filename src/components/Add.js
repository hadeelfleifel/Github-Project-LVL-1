import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
      <div >
        <input placeholder="Repo Title"/>
        <input placeholder="Repo Language"/>
        <select>
  <option >Private</option>
  <option >Public</option>
  
</select>
<button>Add</button>
<hr/>
      </div>
    );
  }
}
