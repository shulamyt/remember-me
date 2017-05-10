import React from 'react';
import './login-page.scss';
import * as RestService from './../utilities/rest-utilities';

class LoginPage extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			inputUsername:'',
			inputPassword:''
		}
	}

	onLogin(){
		let user = {
			name: this.state.inputUsername,
			password: this.state.inputPassword
		};
		RestService.put('/user/login', user).then(this.props.onLoginSuccess);
	}

	render(){
		return (
			<div className="login-page">
				<div className="logo">
					<div className="logo-icon-login"></div>
					<div className="welcome app-text"></div>
				</div>
				<div>
					<div className="login-username">
						<input className="login-input login-text"
							placeholder="שם משתשמש"
							value={this.state.inputUsername}
							onChange={(event)=>{
								this.setState({inputUsername: event.target.value})
							}}
						/>
					</div>
					<div className="login-password">
						<input className="login-input  login-text"
							type="password"
							placeholder="סיסמה"
							value={this.state.inputPassword}
							onChange={(event)=>{
								this.setState({inputPassword: event.target.value})
							}}
						/>
					</div>
					<button className="enter-login  login-text" onClick={this.onLogin.bind(this)}>כניסה</button>
				</div>
				<div className="logo-name-login app-text"></div>

			</div>
		);
	}
}

export default LoginPage;
