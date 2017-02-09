import React,{Component} from 'react';
import {Col, Image} from 'react-bootstrap';

export default class SliderBox extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,text:''};
    }

    render() {
        return (
            <Col md={6}>
                <div className="slider-box">
                    <div className="inner">
                        <Col sm={6} xs={12}>
                            <div className="text">
                                <h3>{this.props.name}</h3>
                                <p>Starting from {this.props.price}$ </p>
                            </div>
                        </Col>
                        <Col sm={6} xs={12}>
                            <div className="tile-img text">
                                <Image src={this.props.image}/>
                            </div>
                        </Col>
                    </div>
                </div>
            </Col>
        );
    };
};