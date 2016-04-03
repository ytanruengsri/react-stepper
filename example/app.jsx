import React, { Component } from 'react';
import Example from './example.jsx';
import { Provider } from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={ this.props.store }>
                <Example />
            </Provider>
        );
    }
};
