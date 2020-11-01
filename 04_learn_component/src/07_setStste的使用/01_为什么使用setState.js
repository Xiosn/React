import React,{Component} from 'react';
export default class App extends Component{
  constructor(props) {
    super(props)
    this.state={
      counter:0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e=>{this.increment()}}>+1</button>
      </div>
    )
  }

  increment() {

  /**
   * 直接修改this.state.counter+1的话 React 无法做到像vue那样的响应式界面渲染
   * 与小程序类似 必须通过this.setState 来通知React 有新数据 需重新进行渲染
   * 
   * this.setState方法是 通过 继承Component得到 具体看源码
   */

    // this.state.counter+1
    this.setState({
      counter:this.state.counter+1
    })
  }
} 