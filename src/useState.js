import React from './react';
import ReactDOM from './react-dom';



//hook=》 useState()
function App() {
    let [num, numSet] = React.useState(0) // num:默认值  numSet:this.setState()  =>合并steate (没有)
    let [name, setName] = React.useState('悟空')
    // console.log(React.useState(0))
    return (
        <div>
            <h1>{num}</h1>
            <h1>{name}</h1>
            <button onClick={() => {
                numSet(num + 1)
                setName('wyf')
                //在执行useState返回的修改函数的时，数据被修改后会立刻执行twoVnode函数，
                //updateElement会被执行，函数组件重新执行，生成newRendernode, 发生dom改变,视图改变
                console.log(num); // 尽管视图改变，hookSstate里的数据被改变，该函数在执行栈中，num不变
            }}>+</button>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))
