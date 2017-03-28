import React from 'react';
import ReactDOM from 'react-dom';
import RememberMe from './rememberMe';

var render = function(){
	ReactDOM.render(
		<RememberMe/>
		,document.getElementById('main')
	);
}


render();