import React from 'react';
import ReactDOM from 'react-dom';
import * as RestService from './utilities/rest-utilities';
import SelectChildrenPage from './pages/selectChildrenPage';

const SELECTED_CHILDREN_PAGE = "selectChildrenPage";

var render = function(){
	var selectedPage = SELECTED_CHILDREN_PAGE;
	var Page;
	switch(selectedPage) {
		case SELECTED_CHILDREN_PAGE:
			renderSelectChildrenPage();
			break;
		default:
			console.log("Opps..");
	}
}

var renderSelectChildrenPage = function(){
	ReactDOM.render(
		<SelectChildrenPage/>
		,document.getElementById('main')
	);
}


// RestService.get('/teacher').then(function(allTeacher) {
// 	console.log('get: teacher');
// 	console.log(allTeacher);
// });

// var teacherID = 1111;
// RestService.get('/teacher?id=' + teacherID).then(function(teacher) {
// 	console.log('get: teacher with id = ' + teacherID);
// 	console.log(teacher);
// });

RestService.get('/child').then(function(allChildren) {
	console.log('get: child');
	console.log(allChildren);
});

var childID = 111;
RestService.get('/child?id=' + childID).then(function(child) {
	console.log('get: child with id = ' + childID);
	console.log(child);
});

var teacherID = 222;
RestService.get('/child?teacherID=' + teacherID).then(function(children) {
	console.log('get: children by teacherID = ' + teacherID);
	console.log(children);
});


render();