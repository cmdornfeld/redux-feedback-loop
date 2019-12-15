import React, {Component} from 'react';
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

class Success extends Component {

    // Function to send user to the home page to start new feedback, upon the click of the "Leave new feedback" button
    clickHandle = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <>
                <Header />
                <Card className={this.props.classes.card}>
                    <h3>Thank you! Your feedback has been successfully submitted.</h3>
                    <br/>
                    <Button className={this.props.classes.button} onClick={this.clickHandle}
                        variant="contained" color="primary">Leave new feedback</Button>
                </Card>
            </>
        )
    }
}


export default connect()(withStyles(styles)(Success));