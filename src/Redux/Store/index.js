import { createStore } from 'redux';
import reducers from '../Reducers';

const initialState = {};

const Store = createStore(reducers, initialState);

export default Store;
