import React, {Component} from 'react';

// passing data into here from resolution - text
// accessing props from App.jsx which has been passed into <ResolutionSingle resolution={res[0]}

export default class ResolutionSingle extends Component {

	toggleChecked() {
		console.log(this);
		Meteor.call('toggleResolution', this.props.resolution);
	}

	deleteResolution() {
		Meteor.call('deleteResolution', this.props.resolution);
	}
	render() {
		// constant variable. keep conditionals outside of your return statement
		// if the resolution is checked (complete=true) add a class of checked. Else no class.
		const resolutionClass = this.props.resolution.complete ? "checked" : "";
		const status = this.props.resolution.complete ? <span className="completed">Completed</span> : '';

		return (
			<li className={resolutionClass}>
			<input type="checkbox"
				readOnly={true}
				checked={this.props.resolution.complete}
				onClick={this.toggleChecked.bind(this)} />
				<a href={`/resolutions/${this.props.resolution._id}`}>{this.props.resolution.text}</a>
				{status}
				<button className="btn-cancel"
					onClick={this.deleteResolution.bind(this)}>
					&times;
					</button>
			</li>
		)
	}
}