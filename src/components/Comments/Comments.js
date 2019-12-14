import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

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

    render() {
        return (
            <>
                <Header />
                <div>
                    <h3>Any comments you want to leave?</h3>
                    <input onChange={(event) => this.handleChange(event)} label="comments" type="text" 
                        placeholder="Enter comments" value={this.state.comments} />
                    <button onClick={this.enterCommentsInfoAndMoveForward}>Next</button>
                </div>
            </>
        )
    }
}

export default connect()(Comments);