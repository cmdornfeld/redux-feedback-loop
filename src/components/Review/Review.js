import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Review extends Component {
    render() {
        return (
            <>
            <Header />
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.props.reduxState.feelingReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.understandingReducer.understanding}</p>
                <p>Support: {this.props.reduxState.supportReducer.support}</p>
                <p>Comments: {this.props.reduxState.commentsReducer.comments}</p>
                <button>Submit</button>
            </div>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);