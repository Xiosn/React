 ## AntDesign是React的UI组件库 主要用于中后台产品 最低支持IE 11
 ### 安装方式：
    npm i antd -save 或 yarn add antd
### 需要在index.js中引入全局的Antd样式：
    import "antd/dist/antd.css"；

## Craco用于主题配置
### 第一步 安装：yarn add @craco/craco
### 第二步 修改package.json文件
  #### 原本启动时，我们是通过react-scripts来管理的
  #### 现在启动时，我们通过craco来管理
  ```
  "scripts": {
    - "start": "react-scripts start",
    - "build": "react-scripts build",
    - "test": "react-scripts test",
    + "start": "craco start",
    + "build": "craco build",
    + "test": "craco test",
  }
  ```
  ### 第三步 在根目录下创建craco.config.js文件用于修改默认配置
    #### 按照配置主题的要求，自定义主题需要用到类似less-loader提供的less变量覆盖功能
        可以引入craco-less来帮助加载lesss样式和修改变量
    #### 安装 craco-less：yarn add craco-less
    #### 修改craco.config.js可以在运行时修改less变量
    #### 引入 antd的样式时，引入antd.less文件：import 'antd/dist/antd.less'
    #### 修改后重启 yarn start 
## 配置别名，需修改webpack配置，也可借助craco来完成，具体看相关配置文件