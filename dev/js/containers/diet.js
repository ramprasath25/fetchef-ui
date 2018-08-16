import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as action from '../actions';
class DietForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div><img src={require('../../../src/images/food1.png')} className="img-responsive" /></div>
                        <div className="well">
                            <h5>Let us Know your diet</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="no_diet" type="radio" name="diet" />
                                                <span className="lead">No Diet</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="lacto_vegetarian" type="radio" name="diet" />
                                                <span className="lead">Lacto Vegetarian</span>
                                            </label>
                                        </div><div className="checkbox">
                                            <label>
                                                <Field component="input" value="ovo_vegetarian" type="radio" name="diet" />
                                                <span className="lead">Ovo Vegetarian</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="paleo" type="radio" name="diet" />
                                                <span className="lead">Paleo</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="primal" type="radio" name="diet" />
                                                <span className="lead">Primal</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="vegetarian" type="radio" name="diet" />
                                                <span className="lead">Vegetarian</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="vegan" type="radio" name="diet" />
                                                <span className="lead">Vegan</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="pescetarian" type="radio" name="diet" />
                                                <span className="lead">Pescetarian</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="ketogenic" type="radio" name="diet" />
                                                <span className="lead">Ketogenic</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <Field component="input" value="Whole_30" type="radio" name="diet" />
                                                <span className="lead">Whole 30</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                    <button className="btn btn-primary pull-right" disabled={pristine || submitting} type="submit">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}
DietForm = reduxForm({
    form: 'dietForm',
    enableReinitialize: true
})(DietForm)

const mapStateToProps = (state) => {
    return {
        initialValues: state.settings.Diet.data 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSettings: () => dispatch(action.getSettings())
    }
}
DietForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(DietForm)
export default DietForm;
