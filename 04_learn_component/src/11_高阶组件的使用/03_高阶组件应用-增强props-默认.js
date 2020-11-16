import React,{createContext, PureComponent} from 'react';

/**
 * 利用createContext(可跨组件传值)的方式 进行 传值
 * 此为props的 默认传值 方式
 */

//创建Context 用于组件间传值
const UserContext = createContext({
  nickName:'默认值',
  level:-1,
  region:'中国'
})

class Home extends PureComponent {
  render() {
    return(
      <UserContext.Consumer>
        {user=>{
          return <h2>Home {`昵称：${user.nickName} 等级：${user.level}地区:${user.region}`}</h2>
        }}
      </UserContext.Consumer>
    )
  }
}
class About extends PureComponent {
  render() {
    return(
      <UserContext.Consumer>
        {user=>{
          return <h2>Home {`昵称：${user.nickName} 等级：${user.level}地区:${user.region}`}</h2>
        }}
      </UserContext.Consumer>
    )
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{nickName:'昵称',level:85,region:'中国'}}>
          <Home/>
          <About/>
        </UserContext.Provider>
      </div>
    )
  }
}
export default App;