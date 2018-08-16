import React from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';
import * as FontAwesome from 'react-icons/lib/fa'

class Notfoundpage extends React.Component {
    constructor(props) {
        super(props);
    }
    fbLogin() {             
        window.FB.login((response) => {
            if (response.authResponse) {
                window.FB.api('/me', { fields: "id,name,picture,email"}, (profile) => {
                    profile['profile_img'] = `https://graph.facebook.com/${profile.id}/picture?type=normal`;
                    profile['expiresIn'] = response.authResponse.expiresIn;
                    this.props.loggedUser(profile);
                });
            } else {
                console.log("User cancelled login");
            }
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h3>LOGIN</h3>
                            <p>It's fast and easy. We promise we won't post anything into your feed without your permission. </p>
                            <p><a className="btn btn-primary btn-lg" onClick={this.fbLogin.bind(this)}><FontAwesome.FaFacebookOfficial size={30}/> Login with Facebook</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={require('../../../src/images/login_cook.png')} />
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
        loggedUser: (loginDetails) => dispatch(action.userLogin(loginDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notfoundpage);