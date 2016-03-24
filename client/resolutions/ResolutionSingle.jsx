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
		return (
			<li>
			<input type="checkbox"
				readOnly={true}
				checked={this.props.resolution.complete}
				onClick={this.toggleChecked.bind(this)} />
				{this.props.resolution.text}
				<button className="btn-cancel"
					onClick={this.deleteResolution.bind(this)}>
					&times;
					</button>
			</li>
		)
	}
}