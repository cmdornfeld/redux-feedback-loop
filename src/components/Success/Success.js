import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Success extends Component {

    clickHandle = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <>
                <Header />
                <div>
                    <h3>Thank you! Your feedback has been successfully submitted.</h3>
                    <br/>
                    <button onClick={this.clickHandle}>Leave new feedback</button>
                </div>
            </>
        )
    }
}


export default connect()(Feeling);