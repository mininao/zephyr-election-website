Meteor.publish("userData", function () {
	if (this.userId) {
		return Meteor.users.find({_id: this.userId}, {
			fields: {
				//'finishedChallenges': 1,
				//'score': 1,
				'services.google.given_name': 1,
				//'rank': 1,
				'services.google.name': 1,
				'services.google.email': 1
			}
		});
	} else 
		this.ready();
});