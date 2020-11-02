
import React from 'react'
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    // 添加一个class的构造函数 constructor()
    constructor(props) { // 在构造函数中定义
        super(props)
        this.state = {
            date: new Date() // 时间戳
        }
    }

    // react 的生命周期 挂载mount  和 组件销毁 unmount
    componentDidMount() { // 组件挂载 相当于是vue中的mounted
        // 设置定时器 定时调用tick方法更新数据
        // this.timer = setInterval(() => {
        //     this.tick()
        // }, 1000);
    }

    componentWillUnmount() { // 组件卸载 相当于是 beforeDestroy
        // 组件销毁时清除定时器
        // clearInterval(this.timer)
    }

    // 定义一个方法更新 this.state 中的date
    tick() {
        this.setState({
            date: new Date()
        })
    }

    activeAction() {
        console.log('执行了事件')
        console.log('this==', this)  // 注意 此时打印的 this为 undefind
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number, index) =>
            <li key={index}>{number}</li>
        );
        console.log('listItems==', listItems)
        return (
            <div className="App">
                {/* <ul>{listItems}</ul>
                <h1>hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
                {/* 在react中书写事件 跟传统写法的不同 1.事件名称是小驼峰命名而不是纯小写了 2.传入函数作为事件处理函数，而不是传入字符串 */}
                {/* <button onClick={this.activeAction}>
                    按钮
                </button> */}
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header> */}
                {/* 表单组件 */}
            </div>
        )
    }
}

export default App;
