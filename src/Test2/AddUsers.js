import React from 'react';
import { Mutation } from 'react-apollo';
import { withState } from 'recompose';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import * as actionCreator from './actions/actionCreator';

const GET_INFO = gql`
{
    allUsers{
        id
        name
        email
      }
}`; 

const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`;
class AddUser extends React.Component {
    constructor(props) {
        super(props);
    }
    addUser = (event) => {
        event.preventDefault();
        this.props.addUser();
    }
    render() {

        // let input;
        return (
            // <Mutation 
            //     mutation={CREATE_USER}
            //     update = {( cache , {data: { addUser } }) => {
            //         const { users } = cache.readQuery({ query :GET_INFO});
            //         cache.writeQuery({
            //             query:GET_INFO,
            //             data:{users:users.concat([addUser])}
            //         })
            //     }}
            // >
            //     {(addUser) => (
                    <div>
                        <form 
                            onSubmit = {this.addUser}
                            // onSubmit={e => {
                            // e.preventDefault();
                            // addUser({ variables: { name: input.value } });
                            // console.log(input.value)
                            // input.value = '';
                            // }}
                        >
                            <input
                                // ref={node => {
                                //     input = node;
                                // }}
                                name='name'
                                onChange={this.props.updateUser}
                                value={this.props.user.name}
                            />
                            <button type='submit'>Add User</button>
                        </form>
                    </div>
            //     )}

            // </Mutation>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.users,
        user:state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateUser: (event) => dispatch({ type: 'UPDATE_USER' , payload:event}),
        addUser: () => dispatch(actionCreator.addUser())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddUser);

