<center style="font-size:20px;font-weight:700">Node模板</center>



### 目标

- 在typescript基础上构建 node 项目
- 利用eslint对node项目进行代码规范



### [ts-node-dev](https://github.com/whitecolor/ts-node-dev)

之前node项目直接安装[nodemon](https://github.com/remy/nodemon)就可以实时监听项目文件变化然后重新启动项目，现在还有一款插件也可以达到同样效果，[ts-node-dev](https://github.com/whitecolor/ts-node-dev)能够帮助我们监听ts项目，同时会将项目编译成原生js文件

```shell
yarn add ts-node-dev --dev
```

在`package.json`文件中设置启动语句

```shell
"dev": "npx tsnd --respawn ./src/index.ts"
```

运行项目

```shell
yarn run dev
```



### [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

不赘述，[How to use ESLint with TypeScript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript)

需要注意的是typescript-eslint和eslint是一脉相承的，typescript-eslint是在eslint基础上构建的，对于一些eslint规则在ts项目中无效果的，可以参考一下配置

```shell
"@typescript-eslint/indent": ["error", 2],
```

