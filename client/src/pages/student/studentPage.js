import React from 'react';
import './student-page.scss';
import StudentDetails from './studentDetails.js';
import CreateMessage from './createMessage.js';


class StudentPage extends React.Component{

	render(){
		return (
			<div className="student-page">
				<div className="logo"/>
                <CreateMessage studentName={this.props.student.name}/>
				<StudentDetails student={this.props.student}/>
				<div className="back-to-list-button">לעבור לרשימת הילדים</div>
			</div>
		);
	}
}

export default StudentPage;
