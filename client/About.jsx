import React, {Component} from 'react';

export default class About extends Component {

	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}
	// setting a meteor session variable on click
	render() {
		return (
			<div>
				<h1>About Us</h1>
				<p>filler</p>
				<button onClick={this.setVar}>Sign Up</button>
			</div>
		)
	}
}