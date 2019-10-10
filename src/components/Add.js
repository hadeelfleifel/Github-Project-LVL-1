import React, { Component } from 'react';

export default class Add extends Component {

  state={
      title:"",
      lang:"",
      status:""

  }

  changeTitle=(event)=>{
    let newTitle=event.target.value
    this.setState({title:newTitle})
  }

  changeLang=(event)=>{
    let newLang=event.target.value
    this.setState({lang:newLang})
  }

  changeSelect=(event)=>{
    let newstatus =event.target.value
    this.setState({status:newstatus})
  }
  

  render() {
    const {changeTitle,changeLang,changeSelect}=this
    const {addrepo,reposadd}=this.props
    return (
      <div >
        <input placeholder="Repo Title" onChange={changeTitle}/>
        <input placeholder="Repo Language" onChange={changeLang}/>
        <select onChange={changeSelect}>
            <option selected disabled hidden>Choose</option>
            <option value="PRIVATE" >Private</option>
            <option value="PUBLIC" >Public</option>
            
          </select>
 <button onClick={addrepo.bind(this,{id: reposadd.length+1,
        title: this.state.title,
        status: this.state.status,
        language: this.state.lang})}>Add New Repo</button> 
        <hr/>
      </div>
    );
  }
}
