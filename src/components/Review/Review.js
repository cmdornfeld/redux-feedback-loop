import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Review extends Component {

    postFeedback = () => {
        let feedback = {
            feeling: this.props.reduxState.feelingReducer.feeling,
            understanding: this.props.reduxState.understandingReducer.understanding,
            support: this.props.reduxState.supportReducer.support,
            comments: this.props.reduxState.commentsReducer.comments
        }

        axios.post('/feedback', feedback).then(response => {
            this.props.history.push('/success');
        }).catch(error => {
            console.log(error);
            alert('Error adding feedback.  See console for details');
        })
    }
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
                <button onClick={this.postFeedback}>Submit</button>
            </div>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);