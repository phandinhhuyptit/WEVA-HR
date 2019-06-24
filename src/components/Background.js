import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './Background.scss';
import * as effectAction from '../state/Action/effectAction';

 class Background extends Component {
    static propTypes = {
        onChangeStateForm : PropTypes.func.isRequired

    }
    handleChangeStateForm = () => {
        // Turn On Or Turn Off BackGround And Form Offer     
        const { onChangeStateForm } = this.props;
        onChangeStateForm();
    }

    render() {
        const {  stateFormOffer } = this.props;
        return (
            <CSSTransition
                classNames="BackGround"
                in={stateFormOffer}
                timeout={500}
                enter={true}
                exit={true}
            // onEnter={() => console.log("On Enter")}
            // onEntering={() => console.log("On Entering")}
            // onEntered={() => console.log("On Entered")}
            // onExit={() => console.log("On Exit")}
            // onExiting={() => console.log("On Exiting")}
            // onExited={() => console.log(" On Exited")}
            >
                <div className="backgroundBody" style={{
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    backgroundColor: 'rgba(74, 71, 71, 0.52)',
                    zIndex: '1',
                }} onClick={() => this.handleChangeStateForm()} />

            </CSSTransition>
        )
    }
}
const mapStateToProps = (state) => ({

    stateFormOffer: state.effect.stateFormOffer,
    stateNotification: state.effect.Notification

})

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeStateForm: () => {
            dispatch(effectAction.changeStateForm())
        },
        onChangeStateNotification: () => {
            dispatch(effectAction.changeStateNotification())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)










