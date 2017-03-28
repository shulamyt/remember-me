import React from 'react';
import './login-page.scss';

import * as RestService from './../utilities/rest-utilities';

class LoginPage extends React.Component{
	
	onLogin(){
		let user = {
			name: "shula",
			password: "1234"
		};
		let self = this;
		RestService.put('/user/login', user).then(function(user) {
			self.props.onLoginSuccess(user);
		});
	}

	render(){
		return (
			<div className="login-page">
				<div onClick={this.onLogin.bind(this)}>login</div>
			</div>
		);
	}
}

export default LoginPage;