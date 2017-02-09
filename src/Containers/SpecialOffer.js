import React, {Component} from 'react';
import {Row,Grid,Image} from 'react-bootstrap';

export default class SpecialOffer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid fluid bsClass="sector text-center gray-background container">
                <Row>
                    <h3>Special offer <span>-30%</span></h3>
                    <Image src={require('../imgs/bed12.jpg')}/>
                    <h5>Living Room Sofa Transformer</h5>
                    <h5>$1900.00 <span>$950.00</span></h5>
                </Row>
            </Grid>

        );
    }
}