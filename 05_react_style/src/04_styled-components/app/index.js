import React, { PureComponent } from 'react';

import Home from '../home';
import Profile from '../profile';


/**
 * css in js 的样式库
 * styled-components
 * 安装方式： yarn add styled-components
 */


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <Profile />
      </div>
    )
  }
}
