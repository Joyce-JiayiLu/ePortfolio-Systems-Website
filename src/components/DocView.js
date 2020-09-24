import  React, { Component } from 'react';

export default class DocView extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let url = "https://docs.google.com/viewerng/viewer?url="+this.props.src+"&embedded=true";

        return(
            <iframe style={this.props.style} src={url}></iframe>
        );
    }
}