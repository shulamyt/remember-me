import React from 'react';
import SelectChildrenPage from './pages/selectChildrenPage';
import LoginPage from './pages/loginPage';
import * as RestService from './utilities/rest-utilities';

const SELECTED_CHILDREN_PAGE = "selectChildrenPage";
const LOGIN_PAGE = "loginPage";

class RememberMe extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			currentPage: LOGIN_PAGE,
			children: [],
			currentUser: {}
		}
	}

	fetchChildrenByTeacherID(){
		let teacherID = 111;
		let self = this;
		RestService.get('/child?teacherID=' + teacherID).then(function(children) {
			console.log('get: children by teacherID = ' + teacherID);
			console.log(children);
			self.setState({children});
		});
	}

	onLoginSuccess(user){
		this.fetchChildrenByTeacherID();
		this.setState({currentUser: user, currentPage: SELECTED_CHILDREN_PAGE});
	}

	renderSelectChildrenPage(){
		return(
			<SelectChildrenPage children={this.state.children}/>
		);
	}

	renderLoginPage(){
		return(
			<LoginPage onLoginSuccess={this.onLoginSuccess.bind(this)}/>
		);
	}

	render(){
		switch(this.state.currentPage) {
			case SELECTED_CHILDREN_PAGE:
				return this.renderSelectChildrenPage();
				break;
			case LOGIN_PAGE:
				return this.renderLoginPage();
				break;
			default:
				console.log("Opps..");
		}
	}
}

export default RememberMe;