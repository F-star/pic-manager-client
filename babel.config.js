module.exports = {
  presets: [
    '@babel/preset-env', // 👉 根据配置的目标浏览器或者运行环境，选择对应的语法包，从而将代码进行转换
    '@babel/preset-react', // 👉 react 语法包，让我们可以使用 React ES6 Class Component 的写法，支持JSX、TSX语法格式
    '@babel/preset-typescript', // 👉 https://github.com/babel/babel/issues/10570
  ]
}