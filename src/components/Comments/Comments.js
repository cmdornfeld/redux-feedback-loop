import React, {Component} from 'react';

import Header from '../Header/Header';

class Comments extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <form>
                        <h3>Any comments you want to leave?</h3>
                        <input label="comments" type="text" placeholder="Comments" />
                        <button>Next</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Comments;