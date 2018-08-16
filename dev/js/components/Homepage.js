import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="container">
                        <h1>Homepage</h1>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Homepage;