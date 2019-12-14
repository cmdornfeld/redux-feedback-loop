import React, {Component} from 'react';

class Admin extends Component {
    render() {
        return (
            <>
                <div>
                    <header>
                        <h2>Feedback Results!</h2>
                    </header>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Comprehension</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Admin;