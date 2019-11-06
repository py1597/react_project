import React from 'react'
import Child from './Child'
// import './index.less'


export default class Life extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count:0
    //     }
    // }

    state = {
        count:1
    }

    handleAdd =()=>{
        this.setState({
                count:this.state.count+1
        })

    }

    handleClick(){
        this.setState({
            count:this.state.count-1
        })
    }
    

    render(){
        // var style = {
        //     padding:100
        // }
        return <div className='content'>
            <p>React生命周期</p>
            <button onClick={this.handleAdd}>点击增加一下</button>
            <button onClick={this.handleClick.bind(this)}>默认点击减少一下</button>
            <p>{this.state.count}</p>
            {/* <Child name="Jack"></Child> */}
            <Child name={this.state.count}></Child>
        </div>
    }        
}