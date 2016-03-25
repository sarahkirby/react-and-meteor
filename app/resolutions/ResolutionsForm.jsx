// {Component} comes from App.jsx TrackerReact(React.Component)
import React, {Component} from 'react';
// no TrackerReact on this because we aren't pulling any data from our Mongo collection
export default class ResolutionsForm extends Component {

	addResolution(event) {
		// stop page from reloading
		event.preventDefault();
		var text = this.refs.resolution.value.trim();
		// calling addResolution function and passing in the arguments. Then a callback
		// When function is complete it will clear the text input = "";
		// ()=> arrow function changes the context of 'this' keyword. Meaning we can use 'this'
		// Bert.alert comes from a meteor package
		// if(text) - making sure the input field is not blank
		if(text) {
			Meteor.call('addResolution', text, (error, data)=>{
				if(error) {
					Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
				} else {
				this.refs.resolution.value = "";
				}
			});
		}
	}
	render() {
		return (
			<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
				<input 
					type="text"
					 ref="resolution" 
					 placeholder="Finish React Meteor Series" />
			</form>
		)
	}
}