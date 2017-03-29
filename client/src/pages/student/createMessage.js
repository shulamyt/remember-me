import React from 'react';
import './create-message.scss';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
class CreateMessage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            whenToSend: "now",
            message: "",
            sender: "",
            sendDate: null
        }
    }
    onWhenToSendChanged(event){
        this.setState({whenToSend : event.target.value})
    }

    renderWhenToSend(){
        return  <div>
                    <div className="my-message-title" onChange={this.onWhenToSendChanged.bind(this)}>מתי לשלוח
                        <label className="radio">
                            <input type="radio" value="now" name="timing" defaultChecked={this.state.whenToSend === "now"}/> עכשיו
                        </label>
                        <label className="radio">
                            <input type="radio"  value="date" name="timing" defaultChecked={this.state.whenToSend === "date"}/> בחק לפי תאריך ושעה
                        </label>
                        <label className="radio">
                            <input type="radio" value="frequency" name="timing" defaultChecked={this.state.whenToSend === "frequency"}/> בחר לפי תדירות
                        </label>
                    </div>
                    {this.state.whenToSend === "date" ? this.renderDateField() : null}
                </div>
    }

    renderDateField(){
        return <div>
                    <DateTime  />
                </div>
    }

    onDateChange(selectedDate){
        this.setState({sendDate: selectedDate.toDate().getTime()})
    }

    renderWhoSends(){
        return <div>
                    <div className="my-message-title">מי שולח</div>
                    <input className="sender-input"
                           value={this.state.sender}
                           onChange={(event)=>{
                               this.setState({sender: event.target.value})
                           }}>
                    </input>
                </div>
    }

    renderMyMessage(){
        return <div className="my-message">
                    <div className="my-message-title">המסר שלי</div>
                    <textarea className="message-text"
                              value={this.state.message}
                              onChange={(event)=>{
                                  this.setState({message: event.target.value})
                        }}>
                    </textarea>
                    <div className="ramaining-size">עוד {} תווים להקלדה</div>
                </div>
    }

    onCompleteClicked(){
        let currentDate = new Date();

        let date = this.state.sendDate != null ? this.state.sendDate : currentDate.getTime();
        let message = {
                        details: {title: this.state.sender ,
                                    body: this.state.message},
                        schedule: {date: date}
                    }
        this.props.onCompleteClicked(message);
    }

	render(){
		return (
			<div className="create-message">
                {this.renderMyMessage()}
                {this.renderWhoSends()}
                {this.renderWhenToSend()}
                <button onClick={this.onCompleteClicked.bind(this)}>שלח</button>

			</div>
		);
	}
}

export default CreateMessage;
