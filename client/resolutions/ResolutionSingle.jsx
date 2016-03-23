import React, {Component} from 'react';

// passing data into here from resolution - text
// accessing props from App.jsx which has been passed into <ResolutionSingle resolution={res[0]}

export default class ResolutionSingle extends Component {
	render() {
		return (
			<li>
				{this.props.resolution.text}
				{this.props.resolution.complete.toString()}
			</li>
		)
	}
}