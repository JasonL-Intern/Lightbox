import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import Dog from '../../../assets/images/dog.jpg';
import classes from './Modal.module.css';

class Modal extends Component {

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <img
                    className = {classes.Modal}
                    src={Dog}
                    alt = "my dog"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                </img>
            </Aux>
        );
    }
}

export default Modal;