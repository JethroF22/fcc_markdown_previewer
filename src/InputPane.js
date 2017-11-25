import React, {Component} from 'react'

class InputPane extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ""
        };
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        this.setState({
            value: value
        });

        this.props.onChange(value);
    }

    render(){
        return (
            <textarea style={{width: "100%", height: "100%"}} value={this.state.value} onChange={this.handleChange}></textarea>
        );
    }
}

export default InputPane
