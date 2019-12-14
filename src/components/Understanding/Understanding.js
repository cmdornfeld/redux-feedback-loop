import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    enterUnderstandingInfoAndMoveForward = () => {
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state});
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <>
                <Header />
                <div>
                    <h3>How well are you understaning the content?</h3>
                    <input onChange={(event) => this.handleChange(event)} label="understanding" type="number" 
                    placeholder="Understanding" value={this.state.understanding}  />
                    <button onClick={this.enterUnderstandingInfoAndMoveForward}>Next</button>
                </div>
            </>
        )
    }
}

export default connect()(Understanding);