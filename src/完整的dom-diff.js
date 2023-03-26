// react :dom-diff

/**比较规则
 * 1、同级节点才会进行比较 
 * 2、不是同类型，也不能复用
 * 3、同级，同类型，key相同才能复用dom
 * 
 * 
 *  */

//<div><span></div>      span

//实现
// 1 根据将老的结构     通过map  创建个映射表 = {key:dom}
// 2 创建一个lastPlaceIndex = 0  （vue2 用的是双指针 ）
// 3 遍历新的结构  去老的map中查找key，找到了，将新旧两个结构里较大的索引赋值给lastPlaceIndex，
//    如果这次的lastPlaceIndex比上次小，那么该dom需要移动；若比上次的大，不用移动；没有找到，根据在新的
//    中的索引进行插入
//    1 复用   2老的删除掉，新的插进去

/*

*/


import React from './react'
import ReactDOM from './react-dom'

class Fathers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: ['A', 'B', 'C', 'D', 'E', 'F'] }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={() => {
                    this.setState({ list: ['A', 'C', 'E', 'B', 'G'] })
                }}>更新</button>
            </div>
        )
    }
}


ReactDOM.render(<Fathers></Fathers>, document.getElementById('root'))