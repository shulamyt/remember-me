import React from 'react';
import ReactDOM from 'react-dom';
import * as RestService from './utilities/rest-utilities';

var render = function(){
	let a = 5;
	ReactDOM.render(
		<div>Hi</div>
		,document.getElementById('main')
	);
}

RestService.get('/children').then(function(myTasksActions) {
	console.log('children');
});

RestService.get('/child').then(function(myTasksActions) {
	console.log('child');
});

render();