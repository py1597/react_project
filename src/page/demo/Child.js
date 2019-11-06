import React from 'react'

export default class Child extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count:0
    //     }
    // }

    state = {
        count:1
    }
    
    componentWillMount(){
        console.log('will Mount');
    }

    componentDidMount(){
        console.log('did Mount'); 
    }

    componentWillReceiveProps(newProps){
        console.log('will ReceiveProps'+newProps.name); 
    }

    shouldComponentUpdate(){
        console.log("should Update");
        return true;
    }

    componentWillUpdate(){
        console.log("will update");
    }

    componentDidUpdate(){
        console.log("did update");
    }
    

    render(){
        // var style = {
        //     padding:100
        // }
        return <div>
            <h1>这里是子组件，测试子组件的生命周期</h1>
            <p>{this.props.name}</p>
        </div>
    }        
}