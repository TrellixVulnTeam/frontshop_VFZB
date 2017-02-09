import React, {Component} from 'react';
import {Grid,Col,FormGroup,FormControl,Row,Image} from 'react-bootstrap';


export default class Footer extends Component {
    render() {
        return (
        <Grid fluid bsClass="sector footer container">
            <Row>
            <Col md={4}>
                <h3>Need Support</h3>
                <p>icons</p>
                <p>made with</p>
            </Col>
            <Col md={4}>
                <h3>Subscription</h3>
                <p>random text</p>
                <form action="#">
                    <FormGroup>
                        <FormControl type="text" value="" placeholder="Enter you email please"/>
                    </FormGroup>
                </form>
            </Col>
            <Col md={4}>
                <h3>Payment Methods</h3>
                <p>we support one of the following payments methods</p>
                <div className="cards">
                    <Image src={require('../imgs/cards.png')}/>
                </div>

            </Col>
        </Row>
        </Grid>
        );
    }
}