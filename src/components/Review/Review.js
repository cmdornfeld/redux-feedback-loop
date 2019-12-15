import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

// Styling for material-UI
const styles = theme => ({
    card: {
      minWidth: 256,
      fontSize: 28,
    },
      textField: {
        marginLeft: theme.spacing.unit,
      },
      button: {
        margin: theme.spacing.unit,
      },
  });

class Review extends Component {

    // Function to send(POST) the state of all reducers to the server via the feeback.router
    postFeedback = () => {
        let feedback = {
            feeling: this.props.reduxState.feelingReducer.feeling,
            understanding: this.props.reduxState.understandingReducer.understanding,
            support: this.props.reduxState.supportReducer.support,
            comments: this.props.reduxState.commentsReducer.comments
        }

        axios.post('/feedback', feedback).then(response => {
            this.props.history.push('/success'); // after our response from the server, move user to the success page
        }).catch(error => {
            console.log(error);
            alert('Error adding feedback.  See console for details');
        })
    }

    // Function to allow the user to return to the previous page and update/change their response
    returnToPreviousPage = () => {
        this.props.history.push('/comments');
    }

    render() {
        return (
            <>
                <Header />
                <Card className={this.props.classes.card}>
                    <h2>Review Your Feedback</h2>
                    <p>Feelings: {this.props.reduxState.feelingReducer.feeling}</p>
                    <p>Understanding: {this.props.reduxState.understandingReducer.understanding}</p>
                    <p>Support: {this.props.reduxState.supportReducer.support}</p>
                    <p>Comments: {this.props.reduxState.commentsReducer.comments}</p>
                    <Button className={this.props.classes.button} onClick={this.returnToPreviousPage}
                        variant="contained" color="secondary">Back</Button>
                    <Button className={this.props.classes.button} onClick={this.postFeedback}
                        variant="contained" color="primary">Submit</Button>
                </Card>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(withStyles(styles)(Review));