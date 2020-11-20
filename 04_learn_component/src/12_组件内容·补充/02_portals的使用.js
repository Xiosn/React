import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

/**
 * ReactDOM.createPortal(child,container)
 * 某些情况下 我们希望渲染的内容独立于父组件 甚至是独立于当前挂载到的DOM元素中（默认都是挂载到id为root的DOM元素上）
 * 参数一：（child）是任何可渲染的React子元素 例如一个元素 字符串或fragment
 * 参数二：（container）是一个DOM元素
 * 
 * 本案例是在html中新定义了个 DIV（Div为屏幕居中） 并将子组件渲染到上面 独立于 root
 */

 //居中 "盒子" 可将要居中的 子组件传入
class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}
