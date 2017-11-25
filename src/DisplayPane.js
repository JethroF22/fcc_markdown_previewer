import React, {Component} from 'react';
import marked from 'marked';
import {Well} from 'react-bootstrap';

class DisplayPane extends Component{
    constructor(props){
        super(props);
        this.createMarkdown = this.createMarkdown.bind(this);
        this.state = {
            value: this.props.value,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value,
        });
    }

    createMarkdown(){
        console.log(marked(this.state.value))
        return {__html: marked(this.state.value)};
    }

    render(){
        return (
            <Well
                dangerouslySetInnerHTML={this.createMarkdown()}
                style={{height: '100%', overflow: 'auto'}}
            >
            </Well>
        );
    }
}

export default DisplayPane;
