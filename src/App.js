import React, { Component } from 'react';
import Table from './components/Table';
import Add from './components/Add';
import uuid from 'uuid'


export default class App extends Component {
  state = {
    repos: [
      {
        id: uuid(),
        title: 'Array',
        status: 'Private',
        language: 'HTML',
        

      },
      {
        id: uuid(),
        title: 'Object',
        status: 'Public',
        language: 'JavaScript',
     

      }
    ],

  };


  deleterepo=(id)=>{
    let afterdelete = this.state.repos.filter((element)=>{return element.id !== id})
    this.setState({repos:afterdelete})
  }


  addrepo=(item)=>{
 
    let newstate = this.state.repos
    if(item.title !=="" && item.status!=="" && item.language!==""){
    newstate.push(item)}
    
    this.setState({repos:newstate})
  }


  editrepo=(id)=>{
      console.log("CHECK")

      
      let newcheck=this.state.repos.map((element,index)=>{

       
         if(id===element.id){
              if(element.status === "Public"){
                element.status="Private" 
              }
              else if (element.status==="Private"){
                element.status="Public"

              }

          }
          return element

      })
      this.setState({repos:newcheck})

  }

  
  // isPrivate=(id)=>{
  //   this.state.repos.map((element,index)=>{
  //     if(id=element.id){
  //     if(element.status==="PRIVATE"){
  //        return "YES"
  //     }
  //     else {
  //       return "No"
  //     }
  //   }}
  //   )}


  


  render() {
    const {repos}=this.state
    const {deleterepo,addrepo, editrepo,isPrivate}=this
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Add addrepo={addrepo} reposadd={repos}/>
       <Table reposparent={repos} deleteparent={deleterepo} editrepo={editrepo} isPrivate={isPrivate} />
      {/* <button onClick={this.addrepo.bind(this,{id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'})}>AddItem</button> */}
      </div>
    );
  }
}
