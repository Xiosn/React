import React, { PureComponent} from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter();


/**
 * Profile组件通过 按钮 发送自定义事件
 * 在 Home组件 中 通过 在 生命周期函数 中进行 接收与卸载 该 自定义消息事件
 */

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener('busName',(a,b)=>{console.log(a,b)})
  }
  componentWillUnmount() {
    eventBus.removeListener('busName',(a,b)=>{console.log(a,b)})
  }
  render() {
    return (
      <h2>My name is home</h2>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>I am Profile</h2>
        <button onClick={e=>{this.btnClick()}}>点击了profile按钮</button>
      </div>
    )
  }
  btnClick() {
    eventBus.emit('busName','Hello Home',123)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}