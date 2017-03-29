import React from 'react';
import './create-message.scss';

class CreateMessage extends React.Component{

    onWhenToSendChanged(){

    }
    renderWhenToSend(){
        return <div onChange={this.onWhenToSendChanged.bind(this)}>מתי לשלוח
                    <label className="radio">
                        <input type="radio" value="now" name="timing" defaultChecked={true}/> עכשיו
                    </label>
                    <label className="radio">
                        <input type="radio"  value="date" name="timing" defaultChecked={false}/> בחר לפי תאריך ושעה
                    </label>
                    <label className="radio">
                        <input type="radio" value="frequency" name="timing" defaultChecked={false}/> בחר לפי תדירות
                    </label>
                </div>
    }

    renderWhoSends(){
        return <div>מי שולח?
                    <input></input>
                </div>
    }

    renderMyMessage(){
        return <div className="my-message">המסר שלי
                    <div>
                        <textarea></textarea>
                        <div>עוד ... תווים למססר</div>
                    </div>
                </div>
    }

	render(){
		return (
			<div className="create-message">
				<div className="student-name ">{this.props.studentName}</div>
                {this.renderMyMessage()}
                {this.renderWhoSends()}
                {this.renderWhenToSend()}
                <button>סיום</button>

			</div>
		);
	}
}

export default CreateMessage;
