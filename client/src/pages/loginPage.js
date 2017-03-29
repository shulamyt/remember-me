import React from 'react';
import './login-page.scss';
import * as RestService from './../utilities/rest-utilities';

const USERNAME = 'username';
const PASSWORD = 'password';

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
				<div className="logo">Remember-Me</div>
				<div className="login-box">
					<div className="login-box-title">כניסה לחשבונך</div>
					<div className="login-username">
						<div className="login-label">שם משתמש</div>
						<input className="login-input"
						value={this.state.inputUsername} 
						onChange={(event)=>{
							this.setState({inputUsername: event.target.value})
						}}
						/>
					</div>
					<div className="login-password">
						<div className="login-label">סיסמה</div>
						<input className="login-input"
						type="password"
						value={this.state.inputPassword} 
						onChange={(event)=>{
							this.setState({inputPassword: event.target.value})
						}}
						/>
					</div>
					<button onClick={this.onLogin.bind(this)}>login</button>
				</div>
				
			</div>
		);
	}
}

export default LoginPage;