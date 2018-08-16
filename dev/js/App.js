import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Notfoundpage from './components/Notfoundpage';
import Settingspage from './components/Settingspage';
import Plannerpage from './components/Plannerpage';
import Recipepage from './components/Recipepage';
import InventoryPage from './components/InventoryPage';
import Loginpage from './components/Loginpage';
import LoadingBar from 'react-redux-loading-bar';
import { isLoggedIn } from './authorization';

class App extends React.Component {
    componentDidMount() {
        // Intializing Facebook Component
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '978899172267344',
                cookie: true,
                xfbml: true,
                version: 'v2.8',
                status: true
            });
            FB.getLoginStatus((response) => {
                console.log("Facebook Connected");
            });
        }
    }

    render() {
        const requireAuth = isLoggedIn();
        return (
            <div>
                <header>
                    <LoadingBar style={{ height: '10px', opacity: '1', zIndex: '100000' }} />
                </header>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/404" component={Notfoundpage} />
                        <Route path="/planner" render={() => (
                            requireAuth !== false ?
                                (<Route component={Plannerpage} />)
                                : (<Redirect to='/' />)
                        )} />
                        <Route exact path="/recipe" render={() => (
                            requireAuth !== false ?
                                (<Route component={Recipepage} />)
                                : (<Redirect to='/' />)
                        )} />
                        <Route path="/settings" render={() => (
                            requireAuth !== false ?
                                (<Route component={Settingspage} />)
                                : (<Redirect to='/' />)
                        )} />
                        <Route path="/inventory" render={() => (
                            requireAuth !== false ?
                                (<Route component={InventoryPage} />)
                                : (<Redirect to='/' />)
                        )} />
                        <Route path="/login" render={() => (
                            requireAuth === false ?
                                (<Route component={Loginpage} />)
                                : (<Redirect to={{
                                    pathname: '/',
                                    state: { from: this.props.location }
                                }} />)
                        )} />
                        <Route component={Notfoundpage} />
                    </Switch>
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
export default withRouter(connect(mapStateToProps)(App));
