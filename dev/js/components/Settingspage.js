import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/lib/fa';
import { isLoggedIn } from '../authorization';
import { Field, reduxForm } from 'redux-form';
import DietForm from '../containers/diet';
import CuisineForm from '../containers/cuisine';
import IntolerancesForm from '../containers/intolerances';
import ExcludeForm from '../containers/exclude';
class Userpage extends React.Component {
    constructor(props) {
        super(props);
    }
    dietResult(values) {
        this.props.addDietResult(values);
    }
    cusineResult(values) {
        this.props.addCusineResult(values);
    }
    intolerancesResult(values) {
        this.props.addIntorleranceResult(values);
    }
    render() {
        const loggedInDetails = isLoggedIn();
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Personal info</h3>
                        <p className="lead">Manage your Basic information, - your name, email etc., </p>
                    </div>
                    <div className="col-md-6">
                        <div className="list-group panel">
                            <a className="list-group-item">
                                <div className="row">
                                    <div className="col-md-5"><h5>Name</h5></div>
                                    <div className="col-md-7"><h5 className="lead">{loggedInDetails.name}</h5></div>
                                </div>
                            </a>
                            <a className="list-group-item">
                                <div className="row">
                                    <div className="col-md-5"><h5>Email</h5></div>
                                    <div className="col-md-7"><h5 className="lead">{loggedInDetails.email}</h5></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Diet */}
                <DietForm onSubmit={this.dietResult.bind(this)} />
                {/* Cuisine Type */}
                <CuisineForm onSubmit={this.cusineResult.bind(this)} />
                {/* Exclude */}
                <ExcludeForm excludeItems={this.props.settings.Exclude} />
                {/* Intolerances */}
                <IntolerancesForm onSubmit={this.intolerancesResult.bind(this)} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addDietResult: (values) => dispatch(action.addDiet(values)),
        addCusineResult: (values) => dispatch(action.addCusine(values)),
        addIntorleranceResult: (values) => dispatch(action.addIntolerance(values))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Userpage)