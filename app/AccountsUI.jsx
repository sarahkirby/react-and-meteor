import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUI extends Component {

	componentDidMount() {
		// setting the view. Blaze template that already exists.
		// render Blaze template into container
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container)); 
	}

	componentWillUnmount() {
		Blaze.remove(this.view);
	}
	
	render() {
		// container that will hold the blaze template
		return <span ref="container" />
	}
}