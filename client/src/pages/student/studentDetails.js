import React from 'react';
import './student-details.scss';

class StudentDetails extends React.Component{

	render(){
		return (
			<div className="student-details">
				<div className="student-name ">{this.props.student.name}</div>
                <img className="student-picture" src={this.props.student.image}/>
                <div className="student-properties">גיל: {this.props.student.age}</div>
                <div className="student-properties">תחביבים: {this.props.student.hobbies}</div>
                <div className="student-properties">קצת עלי: {this.props.student.about}</div>

			</div>
		);
	}
}

export default StudentDetails;
