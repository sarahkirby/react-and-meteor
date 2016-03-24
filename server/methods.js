// run on the server side
Meteor.methods({
	// accepts the object (resolution) - db collect ?
	addResolution(resolution) {
		Resolutions.insert({
			// resolution is the 'text' var from Resolutions Form. But here it is passed through as resolution
			text: resolution,
			complete: false,
			createdAt: new Date()
		});
	}
});