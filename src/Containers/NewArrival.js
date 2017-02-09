import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import ImageBox from '../Components/ImageBox'

export default class NewArrival extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid bsClass="sector container">
                <Row>
                    <h3 className="text-center">New Arrivals</h3>
                    <div className="container">
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom1.jpg')} price={155} title="bedroom 1"/>
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom2.jpg')} price={165} title="bedroom 2"/>
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom3.jpg')} price={155} title="bedroom 3"/>
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom4.jpg')} price={785} title="bedroom 4"/>
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom5.jpg')} price={625} title="bedro  om 5"/>
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom6.jpg')} price={155} title="bedroom 6"/>
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom7.jpg')} price={185} title="bedroom 7"/>
                        <ImageBox sm={6} lg={3} image={require('../imgs/bedroom8.jpg')} price={955} title="bedroom 8"/>
                    </div>
                </Row>
            </Grid>
        );
    }
}