import React, {Component} from 'react';

import Header from '../Header/Header';

class Supported extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <form>
                        <h3>How well are you being supported?</h3>
                        <input label="supported" type="number" placeholder="Supported" />
                        <button>Next</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Supported;