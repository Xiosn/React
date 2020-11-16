import React,{PureComponent} from 'react';

/**
 * 一个组件可能会被复用几十上百次 甚至在不同的页面
 * 当写好了要传值的属性后 后续需要添加新的属性值
 * 可通过定义 高阶函数 来进行 统一的组件 加值 就不用 一个一个组件或页面 去修改
 */


//定义一个高阶组件
function enhanceRegionProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} level={85}/>
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

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickName='昵称'/>
        <EnhanceAbout nickName='昵称'/>
      </div>
    )
  }
}