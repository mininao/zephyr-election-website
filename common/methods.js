var isAdmin = function (userId) {
	if (Houston._admins.find({
			user_id: userId
		}).fetch().length > 0)
		return true;
	else
		return false;
}

Meteor.methods({
	register: function (userId, activity, date, comment, residence, room) {
		if(this.isSimulation) return;
		var result = {valid:false};
		if (!userId)
			throw new Meteor.Error("logged-out", "Veuillez vous connecter");
		if(! _.contains(["show","laser","breakfast"],activity)){
			throw new Meteor.Error("activity-not-found", "Cet activité n'existe pas");
		}
/*		if(residence && !_.contains(["ARAGO","JDS","AMPERE"],residence)){
			throw new Meteor.Error("residence-not-found", "Cet residence n'existe pas");
		}*/
		if(activity != "breakfast"){
			if(Registrations.find({userId:userId,activity:activity}).fetch().length > 0)
				throw new Meteor.Error("already-registered", "Vous avez déjà réservé pour cet évènement");
		} else {
			if(_.isNull(residence) || _.isNull(room)) {
				throw new Meteor.Error("location-missing", "Vous renseigner votre résidence et votre numéro d'appart");
			}			
			if(!comment) {
				throw new Meteor.Error("location-missing", "Veuillez préciser votre menu");
			}				
		}
		if(Meteor.users.find({_id:userId}).fetch().length != 1)
		throw new Meteor.Error("user-not-found", "Veuillez vous connecter.");
		try {
			Registrations.insert({
				userId:userId,
				name:Meteor.users.findOne(userId).services.google.name,
				activity:activity,
				date:new Date(),
				comment:comment,
				residence:residence,
				room:room
			})
		} catch(ex) {
			throw new Meteor.Error("db-error", "Erreur incroyable ! Envoie-nous un message.");
		}
		result.valid = true;
		return result;
	},
	count: function(activity) {
		var sorted = Registrations.find({activity:activity},{sort: { date: 1 }}).fetch();
		_.each(sorted,function(reg, index){
			Registrations.update({_id:reg._id},{$set:{rank:index}});
		});
	}
});