import React, {createContext, PureComponent} from 'react';

//创建Context 用于组件间传值
const UserContext = createContext({
  nickName:'默认值',
  level:-1
})

/**
 * 高阶组件 在这 通过 高阶函数 再进行一次包括 
 * 也就是在使用 子组件 之前 给所有的子组件统一 添加 新的属性值
 * 不用每个子组件都 包裹 一层 UserContext.Consumer
 */
function withUser(WrappedComponent) {
  return props=>{
    return (
      <UserContext.Consumer>
        {user=>{
          return <WrappedComponent {...props} {...user}/>
        }}
      </UserContext.Consumer>
    )
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home: {`用户名：${this.props.nickName} 等级：${this.props.level}`}</h2>
  }
}
class About extends PureComponent {
  render() {
    return <h2>Home: {`用户名：${this.props.nickName} 等级：${this.props.level}`}</h2>
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);

export default class App extends PureComponent {
  render() {
    return(
      <div>
        App
        <UserContext.Provider value={{nickName:"名字", level:85}}>
          <UserHome/>
          <UserAbout/>
        </UserContext.Provider>
      </div>
    )
  }
}