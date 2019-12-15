import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

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

    enterCommentsInfoAndMoveForward = () => {
        this.props.dispatch({type: 'COMMENTS', payload: this.state});
        this.props.history.push('/review');
    }

    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            comments: event.target.value
        })
    }

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
                {JSON.stringify(this.props.reduxState)}
            </>
        )
    }
}

// REMOVE REDUXSTATE DECLARATION AND REMOVE FROM CONNECT; ADDED FOR TESTING ONLY
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(withStyles(styles)(Comments));