import React from 'react';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import * as queries from './Sever_apollo/queries';
import * as mutations from './Sever_apollo/mutation';


class AddUser extends React.Component {

    addUser = (event) => {
        event.preventDefault();
        this.props.addUser();
    }
    render() {

        let input;
        return (
            <Mutation
                mutation={mutations.CREATE_USER}
                update={(cache, { data: { addUser } }) => {
                    const { users } = cache.readQuery({ query: queries.GET_INFO });
                    cache.writeQuery({
                        query: queries.GET_INFO,
                        data: { users: users.concat([addUser]) }
                    })
                }}
            >
                {(addUser) => (
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                addUser({ variables: { name: input.value } });
                                console.log(input.value);
                                input.value = '';
                            }}
                        >
                            <input
                                ref={node => {
                                    input = node;
                                }}
                            />
                            <button type='submit'>Add User</button>
                        </form>
                    </div>
                )}

            </Mutation>
        );
    }
}
const mapStateToProps = state => {

    return {
        users: state.rMain.users
    }
}

export default connect(mapStateToProps)(AddUser);

