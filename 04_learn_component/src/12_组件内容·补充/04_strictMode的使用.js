import React,{PureComponent, StrictMode} from 'react';
/**
 * StrictMode是一个用来突出显示应用程序中潜在问题的工具
 * 与Fragment一样 StrictMode不会渲染任何可见的UI
 * 它与其后代元素触发额外的检查和警告
 * 严格模式检查仅在开发模式下运行 他们不会影响生产构建
 */

 /**
  * 严格模式检查的是查什么？？？
  * 
  * 1、识别不安全的生命周期
  * 2、使用过时的ref API
  * 3、使用废弃的findDOMNode方法
  *   3-1 在之前的React API中 可以通过 findDOMNode 获取DOM 不过已经不推荐使用了
  * 4、检查意外的副作用
  *   4-1 这个组件的 constructor 会调用两次
  * 5、检测过时的context API
  *   5-1 早期的Context是通过static属性声明Context对象属性 通过getChildContext返回Context对象等方式来使用Context的
  */

  class Home extends PureComponent {
    render() {
      return(
        <div>
          HOME
        </div>
      )
    }

    UNSAFE_componentWillMount() {
      console.log("HOME componentWillMount");
    }
  }

  class About extends PureComponent {
    render() {
      return(
        <div>
          ABOUT
        </div>
      )
    }
    componentWillMount() {
      console.log("About componentWillMount");
    }
  }
 export default class App extends PureComponent {
   render() {
     return(
       <div>
         <StrictMode>
           <Home/>
         </StrictMode>
         <About/>
       </div>
     )
   }
 }