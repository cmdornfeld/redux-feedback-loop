import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

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

class Understanding extends Component {

    state = {
        understanding: ''
    }

    // Function to send current State to the understandingReducer, in order to store the info in Redux
    // After dispatching, function then moves the user on to the next page
    enterUnderstandingInfoAndMoveForward = () => {
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state});
        this.props.history.push('/support');
    }

    // Function to set the State of this component to the value typed/selected by the user
    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            understanding: event.target.value
        })
    }

    // Function to allow the user to return to the previous page and update/change their response
    returnToPreviousPage = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <Header />
                <Card className={this.props.classes.card}>
                    <h3>How well are you understaning the content?</h3>
                    <TextField required label="Required" className={this.props.classes.textField} onChange={(event) => this.handleChange(event)}
                        type="number" placeholder="Please enter 1 - 5" value={this.state.understanding} variant="outlined" min="1" max="5" />
                    <Button className={this.props.classes.button} onClick={this.returnToPreviousPage} 
                        variant="contained" color="secondary">Back</Button>
                    <Button className={this.props.classes.button} disabled={!this.state.understanding} 
                        onClick={this.enterUnderstandingInfoAndMoveForward} variant="contained" color="primary">Next</Button>
                </Card>
            </>
        )
    }
}

// REMOVE REDUXSTATE DECLARATION AND REMOVE FROM CONNECT; ADDED FOR TESTING ONLY

export default connect()(withStyles(styles)(Understanding));