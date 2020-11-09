import React, { PureComponent } from 'react';

// Header
function Header() {
  console.log("Header被调用");
  return <h2>我是Header组件</h2>
}

// Main
class Banner extends PureComponent {
  render() {
    console.log("Banner render函数被调用");
    return <h3>我是Banner组件</h3>
  }
}

function ProductList() {
  console.log("ProductList被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}

class Main extends PureComponent {
  render() {
    console.log("Main render函数被调用");
    return (
      <div>
        <Banner/>
        <ProductList/>
      </div>
    )
  }
}

// Footer
function Footer() {
  console.log("Footer被调用");
  return <h2>我是Footer组件</h2>
}

/**
 * 当你仅仅只是想更改当前计数的时候
 * 所有的子组件都会被执行一次render函数 这是非常消耗性能的
 * 通过生命周期 shouldComponentUpdate 方法 可以让不相干的 子组件 不执行 render函数
 * 该生命周期本质上是通过判断 引用类型 在 堆内存 中存储是否一致 不一致 true 一致 false
 * 
 * 
 * 与生命周期shouldComponentUpdate() 不同的是 继承PureComponent 内部会自动帮你判断 节省繁琐的步骤与代码
 */

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

