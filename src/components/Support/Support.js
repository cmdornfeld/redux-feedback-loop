import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Support extends Component {

    state = {
        support: ''
    }

    enterSupportInfoAndMoveForward = () => {
        this.props.dispatch({type: 'SUPPORT', payload: this.state});
        this.props.history.push('/comments');
    }

    handleChange = (event) => {
        console.log('In handle change with:', event.target.value);
        this.setState({
            support: event.target.value
        })
    }

    render() {
        return (
            <>
                <Header />
                <div>
                    <h3>How well are you being supported?</h3>
                    <input onChange={(event) => this.handleChange(event)} label="supported" type="number" 
                    placeholder="Supported" value={this.state.support} />
                    <button onClick={this.enterSupportInfoAndMoveForward}>Next</button>
                </div>
            </>
        )
    }
}

export default connect()(Support);