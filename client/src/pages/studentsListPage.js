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
					<div key={student.id} className="student" onClick={this.props.onStudentClick.bind(student)}>
						<img className="image" src={student.image}/>
						<div className="student-details">{student.name}</div>
					</div>
				);
			});
		}
		
		return (
			<div className="students-list-page">
				<div className="students-list-page-title">למי לשלוח מסר?</div>
				{students}
			</div>
		);
	}
}

export default StudentsListPage;