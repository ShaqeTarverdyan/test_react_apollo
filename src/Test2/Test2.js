import React from 'react';
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import Header from './Header';
import AddUsers from './AddUsers';
import Users from './Users';
import Home from './Home'
import TechsithRedux from './Techsith_redux/techsith_redux';
import Redux_simple from './Techsith_redux/Redux_simple';
import Reducer_split_concat from './Techsith_redux/Reducer_split_concat';


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
                  <Route  exact path='/techsith_redux' component={TechsithRedux}/>
                  <Route  exact path='/techsith_redux/redux_simple' component={Redux_simple}/>
                  <Route path='/techsith_redux/redux_reducer_split_concat' component={Reducer_split_concat}/>
              </Switch>
          </Router>
        );
    }

}

export default Test2;