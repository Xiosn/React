import React,{PureComponent} from 'react';

//登录页面
class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        LoginPge
      </div>
    )
  }
}
//购物车
class CartPage extends PureComponent {
  render() {
    return (
      <div>
        CartPage
      </div>
    )
  }
}
//包装一层统一处理
function withAuth(WrappedComponent) {
  return props=>{
    const {isLogin} = props;
    if (isLogin) {
      return <WrappedComponent {...props}/>
    }else return <LoginPage/>
  }
}

/**
 * 通过在组件传值 isLogin={false} 判断 return 哪个组件
 */

const AuthCartPage  = withAuth(CartPage);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false}/>
      </div>
    )
  }
}