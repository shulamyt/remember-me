import React from 'react';
import './student-page.scss';
import StudentDetails from './studentDetails.js';
import CreateMessage from './createMessage.js';
import StudentMessages from './studentMessages.js'
import * as RestService from './../../utilities/rest-utilities';


class StudentPage extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			messages: []
		}
	}

	componentDidMount(){
		this.fetchMessages();
	}

	render(){
		return (
			<div className="student-page">
				<div className="logo"/>
                <CreateMessage studentName={this.props.student.name}
                                onCompleteClicked={this.onCompleteClicked.bind(this)}/>
				<StudentDetails student={this.props.student}/>
				<div className="back-to-list-button" onClick={this.props.onBackToStudentsList}>חזרה לרשימת הילדים</div>
				<StudentMessages messages={this.state.messages}/>
			</div>
		);
	}

	onCompleteClicked(message){
		let self = this;
		this.props.onCompleteClicked(message).then((postedMessage)=>{
			console.log(postedMessage);
			self.fetchMessages();
		}).catch((err)=>{
			console.error("error posting message" + err);
		});
	} 

	fetchMessages(){
		let self = this;
		RestService.get('/message?studentId=' + self.props.student.id).then(function(messages) {
			console.log('get: messages by studentId = ' + self.props.student.id);
			console.log(messages);
			self.setState({messages});
		});
	}
}

export default StudentPage;
