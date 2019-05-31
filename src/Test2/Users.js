import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator from '../Test2/Redux/actions/actions';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.props.getUsers();
    };
    render() {

        return (
            <div>
                {this.props.loading ? <p>Loading ... </p> : 
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
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.rMain.users,
        loading:state.rMain.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(actionCreator.getUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);