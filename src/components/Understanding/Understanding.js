import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    enterUnderstandingInfoAndMoveForward = () => {
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state});
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            understanding: event.target.value
        })
    }

    returnToPreviousPage = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <Header />
                <div>
                    <h3>How well are you understaning the content?</h3>
                    <input onChange={(event) => this.handleChange(event)} type="number" 
                        placeholder="Please enter 1 - 5" value={this.state.understanding} min="1" max="5" />
                    <button onClick={this.returnToPreviousPage}>Back</button>
                    <button disabled={!this.state.understanding} onClick={this.enterUnderstandingInfoAndMoveForward}>Next</button>
                </div>
                {JSON.stringify(this.props.reduxState)}
                {/* REMOVE THE ABOVE LINE; FOR TESTING ONLY */}
            </>
        )
    }
}

// REMOVE REDUXSTATE DECLARATION AND REMOVE FROM CONNECT; ADDED FOR TESTING ONLY
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);