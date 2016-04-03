import React, { Component } from 'react';
import Stepper from 'react-stepper';
import { connect } from 'react-redux';
import * as actions from './action-creators';

class Example extends Component {
    render() {
        const steps = [{
            name: 'zu klein',
            value: 1
        }, {
            name: 'klein',
            value: 2
        }, {
            name: 'genau',
            value: 3
        }, {
            name: 'groß',
            value: 4
        }, {
            name: 'zu groß',
            value: 5
        }];

        return(
            <div>
                <Stepper
                    steps={steps}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        steps: state
    };
};

export default connect(mapStateToProps)(Example);
