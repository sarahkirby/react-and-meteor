import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// creating database - resoltuions
Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

	resolutions() {
		// .find() returns all reasolutions in collection(db). fetch returns an object
		return Resolutions.find().fetch();
	}
	addResolution(event) {
		// stop page from reloading
		event.preventDefault();
		var text = this.refs.resolution.value.trim();

		Resolutions.insert({
			text: text,
			complete: false,
			createdAt: new Date()
		});

		this.refs.resolution.value = "";

	}
	render() {
		let res = this.resolutions();
		
		console.log(this.resolutions());
		return (
			<div>
				<h1>My Resolutions</h1>
				<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
					<input type="text" ref="resolution" placeholder="Finish React Meteor Series" />
				</form>
			</div>
		)
	}
}