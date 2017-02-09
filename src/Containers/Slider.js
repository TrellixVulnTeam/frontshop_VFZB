import React, {Component} from 'react';
import {Grid, Col, Row, Clearfix} from 'react-bootstrap'
import SliderBox from '../Components/SliderBox'

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    render() {
        return (
            <Grid fluid bsClass="pushTop container">
                <Row id="slider">
                    <SliderBox name="Men Bags" image={require('../imgs/tile01.jpg')} price={55.99}/>
                    <SliderBox name="Furniture" image={require('../imgs/tile02.jpg')} price={555.99}/>
                    <Clearfix visibleMdBlock/>
                    <SliderBox name="Clocks" image={require('../imgs/tile03.jpg')} price={1565.99}/>
                    <SliderBox name="Lightning" image={require('../imgs/tile04.jpg')} price={556.99}/>
                </Row>
            </Grid>
        );
    }
}