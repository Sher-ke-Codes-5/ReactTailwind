import {CartReducer} from '../Reducer/Reducer';
import { combineReducers } from '@reduxjs/toolkit';
export const RootReducer=combineReducers({
    CartReducer:CartReducer
});