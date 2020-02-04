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

class Feeling extends Component {
    
    state = {
        feeling: ''
    }

    // Function to send current State to the feelingReducer, in order to store the info in Redux
    // After dispatching, function then moves the user on to the next page
    enterFeelingInfoAndMoveForward = () => {
        this.props.dispatch({type: 'FEELING', payload: this.state});
        this.props.history.push('/understanding');
    }

    // Function to set the State of this component to the value typed/selected by the user
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
                        placeholder="Please enter 1 - 5" value={this.state.feeling} variant="outlined" min={1} max={5} />
                    <Button className={this.props.classes.button} disabled={!this.state.feeling} 
                        onClick={this.enterFeelingInfoAndMoveForward} variant="contained" color="primary" >
                        Next
                    </Button>
                </Card>
            </>
        )
    }
}

export default connect()(withStyles(styles)(Feeling));