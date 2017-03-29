import React from 'react';
import './student-messages.scss';

class StudentMessages extends React.Component{

	render(){
		return (
			<div className="student-messages">
				{this.getMessageBody()}
			</div>
		);
	}

	getMessageBody(){
		let messages;
		if(this.props.messages){
			messages = this.props.messages.map((message)=>{
				return (
					<div key={message.id} className="message">
						{message.text}
					</div>
				);
			});
		}

		return messages;		
	}
}

export default StudentMessages;
