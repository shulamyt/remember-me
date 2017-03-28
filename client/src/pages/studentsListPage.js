import React from 'react';
import './students-list-page.scss';

class StudentsListPage extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	render(){
		let students;
		if(this.props.students){
			students = this.props.students.map((student)=>{
				return (
					<div className="student" key={student.id}>{student.name}</div>
				);
			});
		}
		
		return (
			<div>
				{students}
			</div>
		);
	}
}

export default StudentsListPage;