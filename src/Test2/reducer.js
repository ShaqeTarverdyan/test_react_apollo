import React from 'react';
import client from './client';
import gql from 'graphql-tag';
import store from "./store";
import { ApolloProvider, Query, Mutation } from "react-apollo";

const initialState = {
    users: [],
    user:{name:''}
}

const GET_INFO = gql`
{
    allUsers{
        id
        name
        email
      }
}`;
const UPDATE_USERS = gql`
    mutation UpdateUser($id:ID!, $name:String) {
        updateUser(id:$id, name:$name) {
            name
            id
        }
    }
`;
const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`;

const dispatchUsers = user => {
    store.dispatch({ type: 'USER_RECIEVED', payload: user })
};
class Users extends React.Component {
    render() {
        return (
            <Query query={GET_INFO}>
                {({ loading, error, data }) => {
                    if (loading) return <p>loading...</p>
                    if (error) return <p>error...</p>
                    return data.users.map(({ name }) => {
                        console.log(data)
                        let input;
                        return (
                            <Mutation mutation={UPDATE_USERS} >
                                {(updateUser, { loading, error }) => (
                                    <div>
                                        <p>{name}</p>
                                        <form onSubmit={e => {
                                            e.preventDefault();
                                            updateUser({ variables: { name: input.value } });
                                            input.value = "";
                                        }}
                                        >
                                            <input ref={node => {
                                                input = node;
                                            }}
                                            />
                                            <button type='submit'>UPDATE USER</button>
                                        </form>
                                        {loading && <p> loading...</p>}
                                        {error && <p>Errror :(</p>}
                                    </div>
                                )}
                            </Mutation>
                        )
                    })
                }}
            </Query>
        );
    }
}



const reducer = (state = initialState, action) => {
    if (action.type === 'GET_USERS') {
    //    return  <Users />
        const users = client.query({ query: GET_INFO })
            .then(result => {
                dispatchUsers(result.data.allUsers);
            });
    }
    else if (action.type === 'USER_RECIEVED') {
        return { ...state, users: action.payload }
    }
    else if(action.type === 'UPDATE_USER') {
        const event = action.payload;
        const newUser = {...state.user,[event.target.name]: event.target.value  }
        return { ...state, user: newUser };
    }
    else if(action.type === 'ADD_USER' ) {
        console.log('add user action called');
        const newUser = [
            ...state.users,
            {name:state.user.name}
        ]
        console.log(newUser);
        return {...state, users:newUser, user:{name:''}}

    }
    return state;

}
export default reducer;