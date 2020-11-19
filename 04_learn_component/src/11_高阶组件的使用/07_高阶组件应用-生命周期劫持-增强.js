import React,{PureComponent} from 'react';

class Home extends PureComponent {
  render() {
    return(
      <h2>Home</h2>
    )
  }
}
class About extends PureComponent {
  render() {
    return(
      <div>
        About
      </div>
    )
  }
}

/**
 * 通过高阶组件 可以 省去在每个组件都写一遍一模一样的生命周期方法
 */
function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    componentWillMount() {//即将渲染
      this.beginTime = Date.now();
    }
    componentDidMount() {//渲染完成
      this.endTime = Date.now();
      const time = this.endTime - this.beginTime;
      console.log(`渲染所有时间：${time}`);
    }
    render() {
      return <WrappedComponent/>
    }
  }
}

const HomeTime = withRenderTime(Home);
const AboutTime = withRenderTime(About);
export default class App extends PureComponent {
  render() {
    return(
      <div>
        <HomeTime/>
        <AboutTime/>
      </div>
    )
  }
}