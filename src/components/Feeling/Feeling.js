import React, {Component} from 'react';

import Header from '../Header/Header';

class Feeling extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <form>
                        <h3>How are you feeling today?</h3>
                        <input label="Feeling" type="number" placeholder="Feeling" />
                        <button>Next</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Feeling;