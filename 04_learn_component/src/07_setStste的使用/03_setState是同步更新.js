import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      message:'Hello World'
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e=>{this.changeText()}}>改变文本</button>
        <button id='btn'>改变文本2</button>
      </div>
    )
  }

/**
 * setState同步异步的两种情况
 * 在React 生命周期 和 合成事件 中是异步的
 * 在 定时器 和 原生事件 中是同步的
 */


  componentDidUpdate() {
    document.getElementById('btn').addEventListener('click',e=>{
      this.setState({
        message:'你好啊，xiaohs'
      })
      console.log(this.state.message);//你好啊，xiaohs
    })


    // this.setState({
    //   message:'你好啊，xiaohs'
    // })
    // console.log(this.state.message);// Hello World
  }


  changeText() {
    
    // 情况一：将setState放入定时器中
    setTimeout(()=>{
      this.setState({
        message:'你好啊，xiaohs'
      })
      console.log(this.state.message);//你好啊，xiaohs
    }) 
  } 
}
