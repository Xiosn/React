import React, { Component } from 'react'
import NavBar from './NavBar'  //方式一
import NavBar2 from './NavBar2';  //方式二

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
        <NavBar>
          <div>aaa</div>
          <div>bbb</div>
          <div>ccc</div>
        </NavBar>

      <hr/>

        <NavBar2 
          leftSlot={<div>1</div>}
          centerSlot={<div>2</div>}
          rightSlot={<div>3</div>}/>
      </div>
      </div>
    )
  }
}
