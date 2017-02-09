import React, {Component} from 'react';
import '../css/App.css';
import {Grid, Row}from 'react-bootstrap'
import Header from '../Containers/Header';
import Slider from '../Containers/Slider'
import Footer from '../Containers/Footer'
import BestSeller from '../Containers/BestSeller'
import SpecialOffer from '../Containers/SpecialOffer'
import NewArrival from '../Containers/NewArrival'

class App extends Component {
    render() {
        return (
        <Grid bsClass="page-wrapper">
            <Row>
                <Header />
                <Slider />
                <BestSeller/>
                <SpecialOffer/>
                <NewArrival/>
                <Footer />
            </Row>
        </Grid>
        );
    }
}
export default App;