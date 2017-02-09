import React, {Component} from 'react';
import {Grid,Row} from 'react-bootstrap';
import ImageBox from '../Components/ImageBox'

export default class BestSeller extends Component {
    render() {
        return (
            <Grid fluid bsClass="sector container">
                <Row>
                    <h3 className="text-center">Best Sellers</h3>
                    <div className="container">
                        <ImageBox md={4} sm={6} image={require('../imgs/bed1.png')} price={155} title="bedroom 1"/>
                        <ImageBox md={4} sm={6} image={require('../imgs/bed7.jpg')} price={165} title="bedroom 2"/>
                        <ImageBox md={4} sm={6} image={require('../imgs/bed6.jpg')} price={155} title="bedroom 3"/>
                    </div>
                </Row>
            </Grid>
        );
    }
}