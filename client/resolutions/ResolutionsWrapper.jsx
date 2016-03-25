import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
// creating database - resoltuions
Resolutions = new Mongo.Collection("resolutions");

// only need to use TrackerReact when you are pulling in data
export default class ResolutionsWrapper extends TrackerReact(React.Component) {
	constructor() {
		super();
		// this.state belongs to this component only
		// this.state.subscription.resolutions = all resolutions in db (?)
		// Tracker React allows us to use Meteor.subscribe functions
		this.state = {
			subscription: {
				resolutions: Meteor.subscribe("userResolutions")
			}
		}
	}
	componentWillUnmount() {
		// when we no longer want to subscribe to the data
		this.state.subscription.resolutions.stop();
	}

	resolutions() {
		// Mongo query - .find() returns all reasolutions in collection(db). fetch returns an object
		return Resolutions.find().fetch();
	}
	// grabbing the session variable test from about.
	render() {
		return (
			<ReactCSSTransitionGroup 
			component="div"
			transitionName="route"
			transitionEnterTimeout={600}
			transitionAppearTimeout={600}
			transitionLeaveTimeout={400}
			transitionAppear={true}
			>
				<h1>My Resolutions - {Session.get('test')}</h1>
				<ResolutionsForm />
				<ReactCSSTransitionGroup 
					component="ul"
					className="resolutions"
					transitionName="resolutionLoad"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}
					>
					{this.resolutions().map((resolution)=>{
						return <ResolutionSingle key={resolution._id} resolution={resolution} />
					})}
					</ReactCSSTransitionGroup>
			</ReactCSSTransitionGroup>
		)
	}
}

