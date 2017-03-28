import React from 'react';
import './select-children-page.scss';

class SelectChildrenPage extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	render(){
		console.log(this.props.children);
		let children = this.props.children.map((child)=>{
			return (
				<div className="child" key={child.name}>{child.name}</div>
			);
		});
		return (
			<div>
				{children}
			</div>
		);
	}
}

export default SelectChildrenPage;