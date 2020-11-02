import React, { Component } from 'react';

/**
 * 总结：多次调用this.setState()  传入函数会将结果进行累加  传入对象则进行合并
 * 同异步情况：
 *  1、 this.setState在setTimeout和js原生事件中是同步的
 *  2、 在合成事件和生命周期中 setState是异步的
 */
export default class App extends Component {
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

    // 1. setState本身被合并
    // this.setState({
    //   counter:this.state.counter+1
    // })
    // this.setState({
    //   counter:this.state.counter+1
    // })
    // this.setState({
    //   counter:this.state.counter+1
    // })

    // 2.setState合并时进行累加  拿的是第一次传入的结果 并不是叠加后的
    this.setState((preState, props)=>{
      return {
        counter:preState.counter+1
      }
    })

    this.setState((preState, props)=>{
      return {
        counter:preState.counter+1
      }
    })

    this.setState((preState, props)=>{
      return {
        counter:preState.counter+1
      }
    })

    this.setState((preState, props)=>{
      return {
        counter:preState.counter+1
      }
    })
  }
}
