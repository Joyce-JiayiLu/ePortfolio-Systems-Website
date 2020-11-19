import  React, { Component } from 'react';

export default class DocView extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let url = this.props.src;
        console.log(url);

        return(
            <embed style={{
                width: "100vh",
                height: "100vh",
                border: 'none',
                position: 'relative'
            }} src={url}></embed>
        );
    }
}