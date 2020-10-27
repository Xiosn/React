import React, {Component} from 'react';

/**
 * 子组件传值到父组件
 * 父组件中 将对应逻辑函数 整个 传递过去子组件
 * 子组件中 通过this.props将传过来的 increment方法 解构出来 提供给button的onClick()点击事件使用
 */
class CountCpn extends Component {
  render() {
    const {increment} = this.props;
    return (
      <button onClick={increment}>+1</button>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h2>计数器：{this.state.count}</h2>
        {/* 俩个按钮设置改变的是同一个状态 */}
        <button onClick={e=>{this.increment()}}>+</button>
        <CountCpn increment={e=>{this.increment()}}/>
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count +1
    })
  }
}