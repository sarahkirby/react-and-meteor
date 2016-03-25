import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends TrackerReact(Component) {
	constructor() {
		super();
		this.state = {
			subscription: {
				resolutions: Meteor.subscribe("userResolutions")
			}
		}
	}
	componentWillUnmount() {
		this.state.subscription.resolutions.stop();
	}
	// accessing single resolution. this.props.id has been passed through from the route.
	// don't need .fetch() if finding one.
	resolution() {
		return Resolutions.findOne(this.props.id);
	}
	render() {
		let res = this.resolution();

		if(!res) {
			return(<div>Loading...</div>);
		}
		
		return (
			<div>
				<h1>{res.text}</h1>

			</div>
		)
	}
}