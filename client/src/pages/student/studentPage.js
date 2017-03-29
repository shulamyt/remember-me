import React from 'react';
import './student-page.scss';
import StudentDetails from './studentDetails.js';


class StudentPage extends React.Component{

	render(){
		return (
			<div className="student-page">
				<div className="logo">Remeber Me</div>
				<StudentDetails student={this.props.student}/>
				<div className="back-to-list-button">לעבור לרשימת הילדים</div>
			</div>
		);
	}
}

export default StudentPage;
