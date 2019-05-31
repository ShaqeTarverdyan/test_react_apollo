import React from 'react';
import { connect } from 'react-redux';

class Reducer_split_concat extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div style={{display:'inline-block',margin:'40px'}}>
                        <span>A:</span>
                        <span>{this.props.a}</span>
                    </div>
                    <button onClick={() => this.props.updateA(this.props.b)}>update A</button>
                </div>
                <div>
                    <div style={{display:'inline-block',margin:'40px'}}>
                        <span>B:</span>
                        <span>{this.props.b}</span>
                    </div>
                    <button onClick={() => this.props.updateB(this.props.a)}>update B</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        a:state.rA.a,
        b:state.rB.b
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateA:(b) => dispatch({type:'UPDATE_A', b:b}),
        updateB:(a) => dispatch({type:'UPDATE_B',a:a})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Reducer_split_concat);