import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import { connect } from 'react-redux';



class TechsithRedux extends React.Component {
    render() {
        return (
            <>
            <div>
                <ul>
                    <li>
                        <Link   to={'/techsith_redux/redux_simple'}>Redux_simple</Link>
                    </li>
                    <li>
                        <Link to={'/techsith_redux/redux_reducer_split_concat'}>Redux_reducer_split_concat</Link>
                    </li>
                </ul>
            </div>
            <Switch>

            </Switch>
            </>
        );
    }
}


export default TechsithRedux;