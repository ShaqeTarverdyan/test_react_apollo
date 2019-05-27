import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { renderToStringWithData } from 'react-apollo';

class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                    <li>
                        <Link to='/addUsers'>AddUsers</Link>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Header;