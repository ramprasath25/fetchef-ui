import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import { isLoggedIn } from '../authorization';
import * as FontAwesome from 'react-icons/lib/fa';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const loginUserDetails = isLoggedIn()
        const userName = loginUserDetails.name;
        return (
            <div className="navbar navbar-inverse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <a className="" href="/">
                            <img src={require('../../../src/images/logo.png')} className="img-responsive header-logo" />
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                            {(loginUserDetails) ? <li><NavLink to="/planner" activeClassName="active">Meal Planner</NavLink></li> : ''}
                            {(loginUserDetails !== false) ?
                                <li className="dropdown">
                                    <a href="" className="dropdown-toggle" data-toggle="dropdown">
                                        Hi {userName}<FontAwesome.FaCaretDown /></a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/settings">Settings</NavLink></li>
                                        <li><NavLink to="/inventory">Inventory</NavLink></li>
                                        <li><a href="" onClick={(e) => this.logout(e)}>Logout</a></li>
                                    </ul>
                                </li> :
                                <li><NavLink to="/login">Login</NavLink></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginDetails: state.loginDetails
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (loginResponse) => dispatch(action.userLogin(loginResponse)),
        logout: () => dispatch(action.userLogout())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header));
