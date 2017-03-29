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
				<div className="logo"></div>
				<div className="login-box">
					<div className="login-box-title">כניסה לחשבונך</div>
					<div className="login-username">	
						<input className="login-input"
						value={this.state.inputUsername} 
						onChange={(event)=>{
							this.setState({inputUsername: event.target.value})
						}}
						/>
						<div className="login-label">שם משתמש</div>
					</div>
					<div className="login-password">
						<input className="login-input"
						type="password"
						value={this.state.inputPassword} 
						onChange={(event)=>{
							this.setState({inputPassword: event.target.value})
						}}
						/>
						<div className="login-label">סיסמה</div>
					</div>
					<button className="enter-login" onClick={this.onLogin.bind(this)}>כניסה</button>
				</div>
				
			</div>
		);
	}
}

export default LoginPage;