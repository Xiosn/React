import React, {PureComponent, createRef} from 'react';


/**
 * ref 用于获取 DOM节点 三种方式·字符串 对象 函数
 * 字符串：通过refs拿到DOM节点
 * 对象：  导入 createRef方法 赋值到this上  通过this.titleRef.current 取值
 * 函数：  通过箭头函数 并在箭头函数内 将参数 args 赋值给 this.titleEl 
 * 
 * 如果将ref用在组件上 拿到的是组件的对象 函数组件不可用 因为它没有实例
 */

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef();
    this.counterRef = createRef();
  }

  render() {
    return(
      <div>
        {/* 方式一：字符串 即将废弃 */}
        <h2 ref='titleRef'>hello React</h2>
        {/* 方式二：对象 目前react推荐的方式  */}
        <h2 ref={this.titleRef}>Hello React</h2>
        {/* 方式三：箭头函数  */}
        <h2 ref={args=>{this.titleEl=args}}>Hello React</h2>
        
        <button onClick={()=>{this.changeText()}}>改变文本</button>

        <Counter ref={this.counterRef}/>
        <button onClick={()=>{this.appClick()}}>App改变Counter按钮</button>
      </div>
    )
  }
  changeText() {
    // 第一种方式
    this.refs.titleRef.innerHTML='Hello XHS'
    // 第二种方式
    this.titleRef.current.innerHTML = 'Hello XHS'
    // 第三种方式
    this.titleEl.innerHTML = 'Hello XHS'
  }

  appClick() {
    this.counterRef.current.CounterClick();
  }
}

class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      count:0
    }
  }
  render() {
    return (
      <div>
        <h2>计数器：{this.state.count}</h2>
        <button onClick={e=>{this.CounterClick()}}>Counter组件的按钮</button>
      </div>
    )
  }
  CounterClick() {
    this.setState({
      count:this.state.count+1
    })
  }
}