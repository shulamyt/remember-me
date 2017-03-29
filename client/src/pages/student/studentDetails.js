import React from 'react';
import './student-details.scss';

class studentDetails extends React.Component{

	render(){
		return (
			<div className="student-details">
				<div className="student-name ">{this.props.student.name}</div>
                <img className="student-picture" src={this.props.student.pic}/>
                <div className="student-properties">???: {this.props.student.age}</div>
                <div className="student-properties">???????: {this.props.student.hobbies}</div>
                <div className="student-properties">??? ???: {this.props.student.about}</div>

			</div>
		);
	}
}

export default studentDetails;
