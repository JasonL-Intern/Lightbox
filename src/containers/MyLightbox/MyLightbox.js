import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';

class MyLightbox extends Component {

    state = {
        showingPics: false,
    }

    lightBoxOpenHandler = () => {
        this.setState({ showingPics: true });
    }

    lightBoxCloseHandler = () => {
        this.setState({ showingPics: false });
    }


    render() {
        return (
            <Aux>
                <Modal show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} />
                <button onClick={this.lightBoxOpenHandler}>Show Dogs</button>
            </Aux>
        );
    }
}

export default MyLightbox;