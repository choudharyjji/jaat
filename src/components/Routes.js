import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';

import Dashboard from "../screens/Dashboard";

export default class Routes extends Component {
	render() {
		return(
			<Router>
                <Scene>
                    <Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
                        <Scene key="signin" component={SignIn}  />
                        <Scene key="signup" component={SignUp} />
                        <Scene key="forgot" component={Forgot} />
                    </Scene>
                    <Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
                        <Scene key="dashboard" component={Dashboard} initial={true}/>
                    </Scene>
                </Scene>
            </Router>
        );
	}
}
