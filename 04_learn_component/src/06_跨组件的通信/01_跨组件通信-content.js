import React, { Component } from 'react'

const UserContext = React.createContext({
    nickName:'我是默认值',
    level:-1
});

class ProfileHeader extends Component {
  render() {
    console.log(this.context);
    return (
        <div>
          <h2>我的昵称：{this.context.nickName}</h2>
          <h2>我的等级：{this.context.level}</h2>
        </div>
    )
  }
}

ProfileHeader.contextType = UserContext;

function ProFile() {
  return (
    <div>
      <ProfileHeader/>
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
    return ( 
      <div>
        <UserContext.Provider value={this.state}>
          <ProFile/>
        </UserContext.Provider>
      </div>
    )
  }
}
