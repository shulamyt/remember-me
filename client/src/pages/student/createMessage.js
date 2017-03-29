import React from 'react';
import './create-message.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateMessage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            whenToSend: "now",
            message: "",
            sender: "",
            sendDate: ""
        }
    }
    onWhenToSendChanged(event){
        this.setState({whenToSend : event.target.value})
    }

    renderWhenToSend(){
        return  <div>
                    <div onChange={this.onWhenToSendChanged.bind(this)}>מתי לשלוח
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
                    <DatePicker dateFormat="DD/MM/YYYY"
                                selected={this.state.sendDate}
                                onChange={this.onDatePickerChange.bind(this)} />
                </div>
    }

    onDatePickerChange(selectedDate){
        this.setState({sendDate: selectedDate})
    }

    renderWhoSends(){
        return <div>מי שולח
                    <input className=""
                           value={this.state.sender}
                           onChange={(event)=>{
                               this.setState({sender: event.target.value})
                           }}>
                    </input>
                </div>
    }

    renderMyMessage(){
        return <div className="my-message">המסר שליכ
                    <div>
                        <textarea className=""
                                  value={this.state.message}
                                  onChange={(event)=>{
                                      this.setState({message: event.target.value})
                            }}>
                        </textarea>
                        <div> ... עוד תווים להקלדה</div>
                    </div>
                </div>
    }

    onCompleteClicked(){
        let message = {
                        details: {title: this.state.sender ,
                                    body: this.state.message},
                        schedule: {date: this.state.sendDate}
                    }
        this.props.onCompleteClicked(message);
    }

	render(){
		return (
			<div className="create-message">
				<div className="student-name ">{this.props.studentName}</div>
                {this.renderMyMessage()}
                {this.renderWhoSends()}
                {this.renderWhenToSend()}
                <button onClick={this.onCompleteClicked.bind(this)}>סיום</button>

			</div>
		);
	}
}

export default CreateMessage;
