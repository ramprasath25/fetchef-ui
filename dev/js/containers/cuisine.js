import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as action from '../actions';

class CuisineForm extends Component {
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
                        <div><img src={require('../../../src/images/food2.png')} className="img-responsive" /></div>
                        <div className="well">
                            <h5>Favourite Cuisine</h5>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="indian" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Indian</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="chinese" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Chinese</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="korean" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Korean</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="thai" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Thai</span>
                                            </label>
                                        </div>

                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="british" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">British</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="irish" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Irish</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="french" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">French</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="italian" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Italian</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="mexican" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Mexican</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="spanish" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Spanish</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="american" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">American</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="greek" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Greek</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="german" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">German</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="switch">
                                                <Field component="input" name="caribbean" type="checkbox" />
                                                <span className="slider round"></span>
                                                <span className="lead">Caribbean</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <button type="submit" disabled={pristine || submitting} className="btn btn-primary pull-right">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}
CuisineForm = reduxForm({
    form: 'cuisineForm',
    enableReinitialize: true
})(CuisineForm)

const mapStateToProps = (state) => {
    return {
        initialValues: state.settings.Cusine.data 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSettings: () => dispatch(action.getSettings())
    }
}
CuisineForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CuisineForm)
export default CuisineForm