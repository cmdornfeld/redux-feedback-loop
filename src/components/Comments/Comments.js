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

class Comments extends Component {

    state = {
        comments: ''
    }

    // Function to send current State to the commentsReducer, in order to store the info in Redux
    // After dispatching, function then moves the user on to the next page
    enterCommentsInfoAndMoveForward = () => {
        this.props.dispatch({type: 'COMMENTS', payload: this.state});
        this.props.history.push('/review');
    }

    // Function to set the State of this component to the value typed/selected by the user
    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            comments: event.target.value
        })
    }

    // Function to allow the user to return to the previous page and update/change their response
    returnToPreviousPage = () => {
        this.props.history.push('/support');
    }

    render() {
        return (
            <>
                <Header />
                <Card className={this.props.classes.card}>
                    <h3>Any comments you want to leave?</h3>
                    <TextField required label="Required" className={this.props.classes.textField} onChange={(event) => this.handleChange(event)} 
                        label="comments" type="text" placeholder="Enter comments" value={this.state.comments} variant="outlined" maxLength="70" />
                    <Button className={this.props.classes.button} onClick={this.returnToPreviousPage}
                        variant="contained" color="secondary">Back</Button>
                    <Button className={this.props.classes.button} onClick={this.enterCommentsInfoAndMoveForward}
                        variant="contained" color="primary">Next</Button>
                </Card>
            </>
        )
    }
}

export default connect()(withStyles(styles)(Comments));