import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import Header from './Header';
import AddUsers from './AddUsers';
import Users from './Users';
import Home from './Home'


class  Test2 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <Router>
              <Header />
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/users' component={Users}/>
                  <Route path='/addUsers' component={AddUsers}/>
              </Switch>
          </Router>
        );
    }

}

export default Test2;