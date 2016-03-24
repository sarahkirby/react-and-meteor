Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", function(){
	return Resolutions.find();
});

Meteor.publish("userResolutions", function(){
	// only use this.userId in publish functions.
	// only returning resolutions by current user
	return Resolutions.find({user: this.userId});
});