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

class Feeling extends Component {
    

    state = {
        feeling: ''
    }

    enterFeelingInfoAndMoveForward = () => {
        this.props.dispatch({type: 'FEELING', payload: this.state});
        this.props.history.push('/understanding');
    }

    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            feeling: event.target.value
        })
    }

    render() {
        return (
            <>
                <Header />
                <Card className={this.props.classes.card}>
                    <h3>How are you feeling today?</h3>
                    <TextField required label="Required" className={this.props.classes.textField} onChange={(event) => this.handleChange(event)} type="number" 
                        placeholder="Please enter 1 - 5" value={this.state.feeling} variant="outlined" min="1" max="5" />
                    <Button className={this.props.classes.button} disabled={!this.state.feeling} 
                        onClick={this.enterFeelingInfoAndMoveForward} variant="contained" color="primary" >
                        Next
                    </Button>
                </Card>
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

export default connect(putReduxStateOnProps)(withStyles(styles)(Feeling));