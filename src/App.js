import React, { Component } from 'react';
import InputPane from './InputPane.js'
import DisplayPane from './DisplayPane.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Bootstrap, Grid, Row, Col, PageHeader} from 'react-bootstrap';


class App extends Component {
    constructor(props){
        super(props);
        this.getValue = this.getValue.bind(this);
        this.state = {
            value: ''
        }
    }

    getValue(value){
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <div>
            <Grid fluid={true} style={{height: '80vh'}}>
            <Row>
            <Col xs={12} fluid={true}>
            <PageHeader className="text-center">Markdown Previewer</PageHeader>
            </Col>
            </Row>
            <Row style={{marginTop: '2%', height: '100%'}}>
            <Col xs={4} style={{height: '100%'}}>
            <InputPane onChange={this.getValue}></InputPane>
            </Col>
            <Col xs={8} style={{height: '100%'}} className="main">
            <DisplayPane value={this.state.value}></DisplayPane>
            </Col>
            </Row>
            </Grid>
            </div>
        );
    }
}

export default App;
