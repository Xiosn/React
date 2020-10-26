import React, {Component} from 'react'

function ChildCpn(props) {
  return (
  <div>
    <h2>{props.name}</h2>
    <h2>{props.age}</h2>
    <h2>{props.height}</h2>
  </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name='xiosn' age='18' height='1.88'/>
        <ChildCpn name='xiaohs' age='20' height='1.85'/>
      </div>
    )
  }
}