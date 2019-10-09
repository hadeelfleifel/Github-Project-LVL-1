import React, { Component } from 'react';
import Repo from './Repo'

export default class Table extends Component {
  render() {
    const {reposparent}=this.props
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>
        <table>
          <tr>

          <th>Number</th>
          <th>Title</th>
          <th>Repo Status</th>
          <th>Language</th>
          <th>Delete</th>

          </tr>

          
          
           
              { 
                  reposparent.map((repo,index)=>{
                  return(
                     <Repo key={index} repo={repo} reposchild={reposparent}/>
                    
                  )
                    })
   
              }
        
          

          </table>
      </div>
    );
  }
}

// { 
//   reposparent.map((repo,index)=>{
//     return(
//       <td> <Repo key={index} repo={repo} reposchild={reposparent}/>
//       </td>
//       )
//    })
 
// }
// { 
//   reposparent.map((repo,index)=>{
//     return(
//       <td> <Repo key={index} repo={repo} reposchild={reposparent}/>
//       </td>
//       )
//    })
 
// }

