import React, { Component } from 'react'

function Header() {
  return (
    <h2>我是header组件</h2>
  )
}

function Main() {
  return (
    <div>
      <h2>我是main组件</h2>
      <Bananer/>
      <OrderList/>
    </div>
  )
}

function Bananer() {
  return <h3>bananer组件</h3>
}

function OrderList() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
}

function Footer() {
  return (
    <h2>我是footer组件</h2>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
