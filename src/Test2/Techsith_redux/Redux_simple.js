import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator from '../Redux/actions/actions';
import logo from '../../logo.svg';
class Redux_simple extends React.Component {
    render() {
        return (
            <>
            <div>
                <h1>Age: <span>{this.props.age}</span></h1>
                <button onClick={this.props.ageUp}>Age Up</button>
                <button onClick={this.props.ageDown}>Age Down</button>
                {this.props.loading && <img src={logo} alt='photo' style={{width:'35px'}}/>} 
                <hr />

                <div>
                    <h2>history</h2>
                    <ul>
                        {
                            this.props.history.map(el => 
                                <li     
                                    style={{
                                        width:'50px', 
                                        height:'25px',
                                        border:'1px solid black',
                                        margin:'5px', 
                                        textAlign:'center',
                                        listStyleType:'none'
                                    }}
                                    onClick={() => this.props.onDElItem(el.id)}
                                >
                                    {el.age}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        age: state.rMain.age,
        loading: state.rMain.loading,
        history: state.rMain.history,
        loadingNew: state.rMain.loadingNew,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ageUp:() => dispatch(actionCreator.ageUP(1)),
        ageDown:() => dispatch(actionCreator.ageDown(1)),
        onDElItem: (id) => dispatch(actionCreator.onDElItem(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Redux_simple);