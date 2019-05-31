import React from 'react';
import client from '../client';
import gql from 'graphql-tag';
import store from '../store/store';
import { ApolloProvider, Query, Mutation } from "react-apollo";

const initialState = {
    a:1
}


const reducer = (state = initialState, action) => {
    const newState = {...state}
   
    if(action.type === 'UPDATE_A') {
        return {
            ...state,
            a:state.a + action.b
        }
    }
    return newState;

}
export default reducer;