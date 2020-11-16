import React,{PureComponent} from 'react';
class App extends PureComponent {
  render() {
    return(
      <div>
        App:{this.props.name}
      </div>
    )
  }
}

/**
 * 高阶组件类似于高阶函数（将函数作为参数传入）
 * 高阶组件就是 定义个函数 将组件作为入参值 给组件包裹一层 方便在调用组件之前做一些操作
 */
function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return NewComponent;
}

export default enhanceComponent(App)