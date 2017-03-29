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
		      dots: true,
		      infinite: true,
		      speed: 500,
		      slidesToShow: 2,
		      slidesToScroll: 1
		    };

		return (
			<Slider {...settings}>
				{this.getMessagesBody()}
			</Slider>
		);
	}

	getMessagesBody(){
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
