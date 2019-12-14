import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

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
                <div>
                    <h3>How are you feeling today?</h3>
                    <input onChange={(event) => this.handleChange(event)} type="number" 
                        placeholder="Please enter 1 - 5" value={this.state.feeling} min="1" max="5" />
                    <button disabled={!this.state.feeling} onClick={this.enterFeelingInfoAndMoveForward}>Next</button>
                </div>
                {JSON.stringify(this.state)}
            </>
        )
    }
}

export default connect()(Feeling);