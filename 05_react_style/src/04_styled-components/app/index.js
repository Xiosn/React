import React, { PureComponent } from 'react';
import styled from 'styled-components'
import Home from '../home';
import Profile from '../profile';

/**
 * css in js 的样式库
 * styled-components
 * 安装方式： yarn add styled-components
 */


 /**
  * 当前相同按钮样式时 可通过继承的方式 详见 按钮一 按钮二
  */
 const HYButton = styled.button`
  padding:10px 20px;
  border-color:red;
  color:red;
 `
 const HYButtonTwo = styled(HYButton)`
  color:blue;
  background-color:yellow;
 `
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <Profile />
        <HYButton>按钮一</HYButton>
        <HYButtonTwo>按钮二</HYButtonTwo>
      </div>
    )
  }
}
