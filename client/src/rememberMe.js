import React from 'react';
import SelectChildrenPage from './pages/selectChildrenPage';
import * as RestService from './utilities/rest-utilities';

const SELECTED_CHILDREN_PAGE = "selectChildrenPage";

class RememberMe extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			currentPage: SELECTED_CHILDREN_PAGE,
			children: []
		}
	}

	componentDidMount(){
		this.fetchChildrenByTeacherID();
	}

	fetchChildrenByTeacherID(){
		let teacherID = 222;
		let self = this;
		RestService.get('/child?teacherID=' + teacherID).then(function(children) {
			console.log('get: children by teacherID = ' + teacherID);
			console.log(children);
			self.setState({children});
		});
	}

	renderSelectChildrenPage(){
		return(
			<SelectChildrenPage children={this.state.children}/>
		);
	}

	render(){
		switch(this.state.currentPage) {
			case SELECTED_CHILDREN_PAGE:
				return this.renderSelectChildrenPage();
				break;
			default:
				console.log("Opps..");
		}
	}
}

export default RememberMe;