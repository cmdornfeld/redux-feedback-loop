import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Support extends Component {

    state = {
        support: ''
    }

    enterSupportInfoAndMoveForward = () => {
        this.props.dispatch({type: 'SUPPORT', payload: this.state});
        this.props.history.push('/comments');
    }

    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            support: event.target.value
        })
    }

    render() {
        return (
            <>
                <Header />
                <div>
                    <h3>How well are you being supported?</h3>
                    <input onChange={(event) => this.handleChange(event)} type="number" 
                    placeholder="Please enter 1 - 5" value={this.state.support} min="1" max="5" />
                    <button disabled={!this.state.support} onClick={this.enterSupportInfoAndMoveForward}>Next</button>
                </div>
                {JSON.stringify(this.props.reduxState)}
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Support);