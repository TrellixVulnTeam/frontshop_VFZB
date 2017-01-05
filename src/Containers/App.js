import React, {Component} from 'react';
import '../css/App.css';
import {Grid, Row}from 'react-bootstrap'
import Header from '../Containers/Header';
import Slider from '../Containers/Slider'
import Footer from '../Containers/Footer'

class App extends Component {
    render() {
        return (
        <Grid bsClass="page-wrapper">
            <Row>
                <Header />
                <Slider/>
                <Footer/>
            </Row>
        </Grid>
        );
    }
}
export default App;