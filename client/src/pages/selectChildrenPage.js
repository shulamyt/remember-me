import React from 'react';

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
				<div key={child.name}>{child.name}</div>
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