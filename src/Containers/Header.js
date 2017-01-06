import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import '../css/App.css'

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col sm={3}>title</Col>
                    <Col sm={6} bsClass="backmenu col">menu</Col>
                    <Col sm={3}>email</Col>
                </Row>
            </Grid>
        );
    }
}