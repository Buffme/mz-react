# 基于 React 的 卖座网 实现思路

- 用 creat-react-app 脚手架搭建

```
creat-react-app mz-react
```

- 删掉原本的 src,新建自己的 src,在此文件夹下，创建 index.js 作为入口文件

```js
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "/base.less";

ReactDOM.render(<App />, document.getElementById("root"));
```

- src 文件夹下创建并书写入口文件中引入的 App 组件;
- src 文件夹下创建 views 文件夹，里面放页面级别的组件（如首页，城市页，登录页等一级路由）
  > 要写路由，则需要下载 react-router-dom，并在文件中进行引入

```js
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import City from "./views/City";

class App extends React.component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/city" component={City} />
          {/* PSPSPS: 注意注意注意 ！！！ */}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
```

- 此项目所用的样式为 less,因此需要
  > 下载 less, less-loader, react-app-rewired, react-app-rewire-less -D

```js
yarn add less less-loader react-app-rewired react-app-rewire-less -D
npm install less less-loader react-app-rewired react-app-rewire-less --save
```

1. 调整 package.json 文件

> 原来的代码：

```js
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
}
```

> 修改后的代码：

```js
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
```

2. 根文件夹下创建 config-overrides.js 文件
   > 代码如下：

```js
const path = require("path");
const rewireLess = require("react-app-rewire-less");
module.exports = function(config, env) {
  // 设置src文件夹的别名，以防文件夹内的文件层级过深
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "./src")
  };
  // 支持 less
  config = rewireLess(config, env);

  return config;
};
```

3. 解决 react-scripts 的版本问题

```js
yarn add react-scripts@2.1.1
```

- 修改 public 里的代码（title,小图标等）

```html
<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
<title>卖座电影</title>
```

- 构建 src 文件夹结构
