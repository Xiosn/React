import React, {PureComponent, createRef} from 'react';


/**
 *  ref 用于获取 DOM节点 三种方式·字符串 对象 函数
 * 字符串：通过refs拿到DOM节点
 * 对象：  导入 createRef方法 赋值到this上  通过this.titleRef.current 取值
 * 函数：  通过箭头函数 并在箭头函数内 将参数 args 赋值给 this.titleEl 
 */

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef();
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
        
        <button onClick={e=>{this.changeText()}}>改变文本</button>
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
}