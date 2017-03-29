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
            sendDate: null,
            sound: 'notif1'
        }
    }

    onWhenToSendChanged(event){
        this.setState({whenToSend : event.target.value})
    }

    renderWhenToSend(){
        return  <div className="when-to-send">
                    <div className="radio-icon-clock"></div>
                    <div className="my-message-title" onChange={this.onWhenToSendChanged.bind(this)}>מתי לשלוח
                        <label className="radio">
                            <div className="radio-label">עכשיו</div>
                            <input type="radio" value="now" name="timing" defaultChecked={this.state.whenToSend === "now"}/>            
                            
                        </label>
                        <label className="radio">
                            {this.state.whenToSend === "date" ? this.renderDateField() : null}
                            <div className="radio-label">בחר לפי תאריך ושעה</div>
                            <input type="radio"  value="date" name="timing" defaultChecked={this.state.whenToSend === "date"}/> 
                            
                        </label>
                        <label className="radio">
                            <div className="radio-label">בחר לפי תדירות</div>
                            <input type="radio" value="frequency" name="timing" defaultChecked={this.state.whenToSend === "frequency"}/>
                            
                        </label>
                    </div>
                </div>
    }

    renderDateField(){
        return <div className="date-field">
                    <DateTime  />
                </div>
    }

    onDateChange(selectedDate){
        this.setState({sendDate: selectedDate.toDate().getTime()})
    }

    renderWhoSends(){
        return <div className="who-sends">
                    <div className="radio-icon-user"></div> 
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
        let maxlength = 110;
        var remainingChars = maxlength - this.state.message.length;
        return <div className="my-message">
                    <div className="radio-icon-envalope"></div>
                    <div className="my-message-title">המסר שלי</div>
                    <textarea className="message-text"
                              maxLength={maxlength}
                              value={this.state.message}
                              onChange={(event)=>{
                                  this.setState({message: event.target.value})
                        }}>
                    </textarea>
                    <div className="ramaining-size">עוד {remainingChars} תווים להקלדה</div>
                </div>
    }

    onCompleteClicked(){
        let currentDate = new Date();

        let date = this.state.sendDate != null ? this.state.sendDate : currentDate.getTime();
        let message = {
            details: {
                title: this.state.sender ,
                body: this.state.message,
                sound: this.state.sound
            },
            schedule: {date: date}
        };
        this.props.onCompleteClicked(message);
        this.setState({whenToSend: "now"});
        this.setState({message: ""});
        this.setState({sender: ""});
        this.setState({sendDate: null});
    }

    renderNotificationSound(){
        return <div className="my-message">
                    <div className="my-message-title">צליל הודעה</div>
                    <select
                              value={this.state.sound}
                              onChange={(event)=>{
                                  this.setState({sound: event.target.value})
                        }}>
                        <option value="notif1">כפיים</option>
                        <option value="notif2">פעמון</option>
                        <option value="notif3">שריקה</option>
                        <option value="notif4">שימחה</option>
                    </select>
                </div>
    }

    

    render(){
        return (
            <div className="create-message">
                {this.renderMyMessage()}
                {this.renderWhoSends()}
                {this.renderWhenToSend()}
                {this.renderNotificationSound()}
                <button onClick={this.onCompleteClicked.bind(this)}>שלח</button>

            </div>
        );
    }
}

export default CreateMessage;