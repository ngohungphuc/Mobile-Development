import {
    AppRegistry
} from 'react-native';
import App from './App';
import {
    Provider
} from 'react-redux';
import React from 'react'

import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}><App/></Provider>
);

AppRegistry.registerComponent('myfirstapp', () => RNRedux);