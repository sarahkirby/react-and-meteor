import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
// creating database - resoltuions
Resolutions = new Mongo.Collection("resolutions");

// only need to use TrackerReact when you are pulling in data
export default class App extends TrackerReact(React.Component) {

	resolutions() {
		// .find() returns all reasolutions in collection(db). fetch returns an object
		return Resolutions.find().fetch();
	}
	render() {
		// grabbing the entire object (all resolutions) from db
		let res = this.resolutions();
		console.log(res);
		// {res[0]} grabbing first resolution from (db) ^above 'let res'. Then passing it into the variable
		// resolution - which is called a prop. Accessing this prop in ResolutionSingle.
		return (
			<div>
				<h1>My Resolutions</h1>
				<ResolutionsForm />
				<ul>
					<ResolutionSingle resolution={res[0]} />
				</ul>
			</div>
		)
	}
}

