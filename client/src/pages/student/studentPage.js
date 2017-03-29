import React from 'react';
import './student-page.scss';
import StudentDetails from './StudentDetails.js';


class studentPage extends React.Component{

	render(){
		return (
			<div className="student-page">
				<div className="logo">Remeber Me</div>
				<StudentDetails student={this.props.student}/>
			</div>
		);
	}
}

export default studentPage;
