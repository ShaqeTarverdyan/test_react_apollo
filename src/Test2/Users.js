import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.props.getUsers();
    };
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.users.map(user => (
                            <li>
                                <h1>Name --- {user.name}</h1>
                                <button>Delete</button>
                                <hr />
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch({ type: 'GET_USERS' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);