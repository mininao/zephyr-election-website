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

/********** DELETE THIS \/ ***************/
Meteor.publish("xx",function(){
var curUser = Meteor.users.findOne(this.userId);
	if(this.userId && curUser.services.google.email == "maxence.aici@edu.esiee.fr") {
		return Registrations.find();
	} else this.ready();
});
/********** DELETE THIS /\ ***************/