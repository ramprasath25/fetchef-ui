import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/lib/fa';
import 'react-select/dist/react-select.css';
import SelectForm from './selectForm';

class ExcludeForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                <strong>Search recipes should not have chosen ingredients that could cause problems for you</strong>
            </Tooltip>
        );
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div><img src={require('../../../src/images/food4.png')} className="img-responsive" /></div>
                        <div className="well">
                            <h5>Exclude Ingredients
                             <OverlayTrigger placement="right" overlay={tooltip}>
                                    <FontAwesome.FaInfoCircle />
                                </OverlayTrigger>
                            </h5>
                        </div>
                        <div className="panel-body">
                            <Field name="exclude" component={SelectForm} />
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}
export default reduxForm({
    form: 'excludeForm'
})(ExcludeForm)
