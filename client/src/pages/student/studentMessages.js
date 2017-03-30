import React from 'react';
import './student-messages.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class StudentMessages extends React.Component{

	render(){
		if(this.props.messages.length == 0){
			return <div/>;
		}

		let settings = {
			className: "messages-slider",
		    dots: true,
		    infinite: false,
		    speed: 500,
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    adaptiveHeight: true,
		    arrows: true

		};

		return (
			<div>
 				<h2>מסרים אחרונים</h2>
 				<Slider {...settings}>
 					{this.getMessagesBody()}
 				</Slider>
 			</div>
		);
	}

	getMessagesBody(){
		let messages;
		if(this.props.messages){
			messages = this.props.messages.map((message)=>{
				return (
					<div key={message.id} className="message">
						<div className="message-body">{message.details.body}</div>
						<div className="message-sender">{message.details.title}</div>
					</div>
				);
			});
		}

		return messages;
	}
}

export default StudentMessages;
