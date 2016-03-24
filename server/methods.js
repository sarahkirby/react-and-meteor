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
	},
	toggleResolution(id, status) {
		// takes the id and changed complete to the opposite of what it was before
		Resolutions.update(id, {
			$set: {complete: ! status}
		});
	},
	deleteResolution(id) {
		Resolutions.remove(id);
	}
});