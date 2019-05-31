import React from 'react';
import client from '../client';
import gql from 'graphql-tag';
import store from '../store/store';
import { Query, Mutation } from "react-apollo";

const initialState = {
    age: 21,
    history: [],
    users: [],
    loading: false,
    error: null
}


const reducer = (state = initialState, action) => {
    const newState = { ...state }

    if (action.type === 'USER_RECIEVED') {
        return { ...newState, loading: false, users: action.payload }
    }
    else if (action.type === 'AGE_UP') {
        return {
            ...state,
            age: state.age + action.value,
            history: state.history.concat({ id: Math.random(), age: state.age + action.value }),
            loading: false
        }
    }
    else if (action.type === 'AGE_DOWN') {
        return {
            ...state,
            age: state.age - action.value,
            history: state.history.concat({ id: Math.random(), age: state.age - action.value })
        }
    }
    else if (action.type === 'LOADING') {
        newState.loading = true
    }
    return newState;

}
export default reducer;