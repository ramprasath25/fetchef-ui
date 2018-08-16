import React from 'react';

class Notfoundpage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <br /><br /><br />
                <table className="table text-center">
                    <tbody><tr>
                        <td className="align-middle">
                            <h1 className="display-1">OOPS!</h1>
                            <p className="lead">Seems to be recipe missing</p></td>
                        <td>
                            <img src={require('../../../src/images/details.png')} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Notfoundpage;