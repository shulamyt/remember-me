import React from 'react';
import StudentsListPage from './pages/studentsListPage';
import LoginPage from './pages/loginPage';
import * as RestService from './utilities/rest-utilities';

const STUDENTS_LIST_PAGE = "studentsListPage";
const LOGIN_PAGE = "loginPage";
const STUDENT_PAGE = "studentPage";

class RememberMe extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			currentPage: LOGIN_PAGE,
			students: [],
			currentUser: {},
			currentStudent: {}
		}
	}

	fetchStudentsByMentorId(){
		let mentorId = 111;
		let self = this;
		RestService.get('/student?mentorId=' + mentorId).then(function(students) {
			console.log('get: student by mentorId = ' + mentorId);
			console.log(students);
			self.setState({students});
		});
	}

	onStudentClick(student){
		this.setState({currentPage: STUDENT_PAGE, currentStudent: student})		
	}

	onLoginSuccess(user){
		this.fetchStudentsByMentorId();
		this.setState({currentUser: user, currentPage: STUDENTS_LIST_PAGE});
	}

	renderStudentPage(){
		return <StudentPage student={this.state.currentStudent}/>
	}

	renderStudentsListPage(){
		return(
			<StudentsListPage students={this.state.students} onStudentClick={this.onStudentClick.bind(this)}/>
		);
	}

	renderLoginPage(){
		return(
			<LoginPage onLoginSuccess={this.onLoginSuccess.bind(this)}/>
		);
	}

	render(){
		switch(this.state.currentPage) {
			case STUDENTS_LIST_PAGE:
				return this.renderStudentsListPage();
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