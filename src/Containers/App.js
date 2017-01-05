import React, {Component} from 'react';
import '../css/App.css';
import Header from '../Containers/Header';
import Slider from '../Containers/Slider'
import Footer from '../Containers/Footer'

class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header />
                <Slider/>
                <Footer/>
            </div>
        );
    }
}
export default App;