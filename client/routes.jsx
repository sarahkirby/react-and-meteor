import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
// ResolutionWrapper etc don't use {ResolutionWrapper} on import.
// This is because we used 'export default'
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';

// action is what happens when you hit this route
// define new route '/'. The action is to mount MainLayout & pass in component as content
FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<ResolutionsWrapper />)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (<About />)
		})
	}
});

// passing id to ResolutionDetail where it will have access to this prop with params
FlowRouter.route('/resolutions/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<ResolutionDetail id={params.id} />)
		})
	}
});