import React, { Component } from 'react'
function ProfileHeader(props) {
  const nickName = props.nickName;
  const level = props.level;
  return (
    <div>
      <h2>我的昵称：{nickName}</h2>
      <h2>我的等级：{level}</h2>
    </div>
  )
}

function ProFile(props) {
  const nickName = props.nickName;
  const level = props.level;
  return (
    <div>
      {/* <ProfileHeader nickName={nickName} level={level}/> */}
      <ProfileHeader {...props}/>
      <ul>
        <li>档案1</li>
        <li>档案2</li>
        <li>档案3</li>
        <li>档案4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      nickName:'kobe',
      level:99
    }
  } 
  render() {
    // const {nickName, level} = this.state;
    return ( 
      <div>
        {/* <ProFile nickName={nickName} level={level}/> */}
        <ProFile {...this.state}/>
      </div>
    )
  }
}
