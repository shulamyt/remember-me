import React from 'react';
import './student-details.scss';

class CreateMessage extends React.Component{

    renderWhenToSend(){
        return <div>מתי לשלוח

        </div>
    }
	render(){
		return (
			<div className="create-message">
				<div className="student-name ">{this.props.studentName}</div>
                <div className="my-message">המסר שלי
                    <div>
                        <textarea></textarea>
                        <div>עוד ... תווים למססר</div>
                    </div>
                </div>
                {this.renderWhenToSend()}


			</div>
		);
	}
}

export default CreateMessage;
