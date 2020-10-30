import React, { Component } from 'react'

const UserContext = React.createContext({
    nickName:'我是默认值',
    level:-1
})
const ThemeContext = React.createContext({
  color:'red'
})
/**
 * 唉 就是XX.Consumer的多层嵌套，不提倡
 * 听说redux？？？下节学习
 */
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
      value=>{
        return (
          <ThemeContext.Consumer>
            {
              theme=>{
                return (
                  <div>
                    <h2 style={{color:theme.color}}>我的昵称：{value.nickName}</h2>
                    <h2>我的等级：{value.level}</h2>
                    <h2>颜色儿：{theme.color}</h2>
                  </div>
                )
              }
            }
          </ThemeContext.Consumer>
        )
      }
    }
    </UserContext.Consumer>
  )
}

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
          <ThemeContext.Provider value={{color:'red'}}>
            <ProFile/>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
