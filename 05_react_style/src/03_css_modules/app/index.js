import React, { PureComponent } from 'react';

import appStyle from'./style.module.css';

import Home from '../home';
import Profile from '../profile';




/**
 * React 脚手架已经内置 css modules的配置
 * .css/.less/.scss 等样式文件都修改成 .module.css/.module.less/.module.scss 等
 * 然后 引入 即可 appStyle.啥啥啥
 */
export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className={appStyle.title}>我是App的title</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
