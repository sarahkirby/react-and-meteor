// run on the server side
Meteor.methods({
	// accepts the object (resolution) - db collect ?
	addResolution(resolution) {
		// check is a meteor package. It checks the variable and here it makes sure it is a string.
		check(resolution, String);
		// if there is no user id
		if(!Meteor.userId()) {
			throw new Meteor.Error('not authorised');
		}
		Resolutions.insert({
			// resolution is the 'text' var from Resolutions Form. But here it is passed through as resolution
			text: resolution,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()
		});
	},
	toggleResolution(resolution) {
		check(resolution, Object);
		// only auth to update if resolution belongs to user
		if(Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('not-authorised');
		}
		// finds the resolution id and complete state & changes it to the opposite of what it was before
		Resolutions.update(resolution._id, {
			$set: {complete: ! resolution.complete}
		});
	},
	deleteResolution(resolution) {
		check(resolution, String);
		if(Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('not-authorised');
		}
		Resolutions.remove(resolution._id);
	}
});