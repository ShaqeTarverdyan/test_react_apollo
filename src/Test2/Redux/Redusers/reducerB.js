import React from 'react';
import client from '../client';
import gql from 'graphql-tag';
import store from '../store/store';
import { ApolloProvider, Query, Mutation } from "react-apollo";

const initialState = {
    b:1
}


const reducer = (state = initialState, action) => {
    const newState = {...state}
   
    if(action.type === 'UPDATE_B') {
        return {
            ...state,
            b:action.a + state.b
        }
    }
    return newState;

}
export default reducer;