import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions'
import { Field, reduxForm } from 'redux-form';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/lib/fa';

class IntolerancesForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
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
                        <div><img src={require('../../../src/images/food3.png')} className="img-responsive" /></div>
                        <div className="well">
                            <h5>Intolerances
                            <OverlayTrigger placement="right" overlay={tooltip}>
                                    <FontAwesome.FaInfoCircle />
                                </OverlayTrigger>
                            </h5>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="dairy" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Dairy</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="egg" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Egg</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="gluten" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Gluten</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="grains" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Grains</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="peanut" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Peanut</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="seafood" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Seafood</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="sesame" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Sesame</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="shellfish" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Shellfish</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="soy" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Soy</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="wheat" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Wheat</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div><button className="btn btn-primary pull-right" disabled={pristine || submitting} type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}

IntolerancesForm = reduxForm({
    form: 'intolerancesForm',
    enableReinitialize: true
})(IntolerancesForm)

function mapStateToProps(state) {
    return {
        initialValues:  state.settings.Intolerance.data 
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getSettings: () => dispatch(action.getSettings())
    }
}
IntolerancesForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(IntolerancesForm)

export default IntolerancesForm