import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './Background.scss';
import * as effectAction from '../state/Action/effectAction';

class Background extends Component {
    static propTypes = {
        onChangeStateForm: PropTypes.func.isRequired

    }
    handleChangeStateForm = () => {
        // Turn On Or Turn Off BackGround And Form Offer     
        const { onChangeStateForm } = this.props;
        onChangeStateForm();
    }

    render() {
        const { stateFormOffer } = this.props;
        return (
            <CSSTransition
                classNames="BackGround"
                in={stateFormOffer}
                timeout={500}
                enter={true}
                exit={true}
            >
                <div className="background" onClick={() => this.handleChangeStateForm()} />

            </CSSTransition>
        )
    }
}

const mapStateToProps = (state) => ({

    stateFormOffer: state.effect.stateFormOffer,
    stateNotification: state.effect.Notification,
    toggleCollapsed: state.app.toggleCollapsedOfSider

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










