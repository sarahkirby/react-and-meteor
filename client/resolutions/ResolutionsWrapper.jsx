import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
// creating database - resoltuions
Resolutions = new Mongo.Collection("resolutions");

// only need to use TrackerReact when you are pulling in data
export default class ResolutionsWrapper extends TrackerReact(React.Component) {

	resolutions() {
		// Mongo query - .find() returns all reasolutions in collection(db). fetch returns an object
		return Resolutions.find().fetch();
	}
	render() {
		return (
			<div>
				<h1>My Resolutions</h1>
				<ResolutionsForm />
				<ul className="resolutions">
					{this.resolutions().map((resolution)=>{
						return <ResolutionSingle key={resolution._id} resolution={resolution} />
					})}
				</ul>
			</div>
		)
	}
}

