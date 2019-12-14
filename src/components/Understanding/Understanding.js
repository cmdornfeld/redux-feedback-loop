import React, {Component} from 'react';

import Header from '../Header/Header';

class Understanding extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <form>
                        <h3>How well are you understaning the content?</h3>
                        <input label="understanding" type="number" placeholder="Understanding" />
                        <button>Next</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Understanding;