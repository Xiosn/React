import React,{PureComponent} from 'react';

class Home extends PureComponent {
  render() {
    return(
      <div>
        <h2>Home</h2>
      </div>
    )
  }
  componentWillMount() {//即将渲染
    this.beginTime = Date.now();
  }
  componentDidMount() {//渲染完成
    this.endTime = Date.now();
    const time = this.endTime - this.beginTime;
    console.log(`渲染所有时间：${time}`);
  }
}

class About extends PureComponent {
  render() {
    return(
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return(
      <div>
        <Home/>
        <About/>
      </div>
    )
  }
}