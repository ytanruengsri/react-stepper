import React, { Component, PropTypes } from 'react';

const BASE_CLASS = 'r-stepper';

export default class Stepper extends Component {
    renderStep(step) {
        const stepStyle = {
            margin: '0 10px'
        };
        const iconStyle = {
            borderRadius: '50%',
            width: '15px',
            height: '15px',
            border: '1px solid #bebebe'
        };
        return (
            <div className={`${BASE_CLASS}_step ${BASE_CLASS}_stepLine`} style={stepStyle}>
                <div className={`${BASE_CLASS}_icon`} style={iconStyle}></div>
                <div className={`${BASE_CLASS}_title`}>
                    {step.name}
                </div>
            </div>
        );
    }

    render() {
        const wrapperStyle = {
            display: 'flex'
        };
        return (
            <div className={BASE_CLASS}>
                <div className={`${BASE_CLASS}_progress`} style={wrapperStyle}>
                    {this.props.steps.map(this.renderStep.bind(this))}
                </div>
            </div>
        );
    }
}

Stepper.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            name: PropTypes.string
        })
    )
};

Stepper.defaultProps = {
    steps: []
};
