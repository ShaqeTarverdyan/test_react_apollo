import React from 'react';
import client from '../client';
import gql from 'graphql-tag';
import store from '../store/store';
import { Query, Mutation } from "react-apollo";

const GET_INFO = gql`
{
    allUsers{
        id
        name
        email
      }
}`;

export const usersRecieved = (user) => {
    return { type: 'USER_RECIEVED', payload: user }
}
export const getUsers = () => {
    return dispatch => {
        dispatch(loading());
        client.query({ query: GET_INFO })
            .then(res => {
                dispatch(usersRecieved(res.data.allUsers))
            }).catch(err => {
                console.log('oops')
            });

    }
}
// export const updateUser = (event) => {
//     return { type: 'UPDATE_USER', payload: event }
// }
// export const addUser = () => {
//     return { type: 'UPDATE_USER' }
// }
export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export const ageUpAsnc = (val) => {
    return { type: 'AGE_UP', value: val }
}
export const ageUP = (val) => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(ageUpAsnc(val));
        }, 5000);
    }
}

export const ageDown = (val) => {
    return { type: 'AGE_DOWN', value: val }
}

export const onDElItem = (id) => {
    return { type: 'DEL_ITEM', key: id }
}