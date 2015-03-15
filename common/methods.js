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
		if (!userId)
			throw new Meteor.Error("logged-out", "Veuillez vous connecter");
		if(! _.contains(["show","laser","breakfast"],activity)){
			throw new Meteor.Error("activity-not-found", "Cet activité n'existe pas");
		}
		if(residence && !_.contains(["ARAGO","JDS","AMPERE"],residence)){
			throw new Meteor.Error("residence-not-found", "Cet residence n'existe pas");
		}
		if(residence && !room){
			throw new Meteor.Error("room-missing", "Please enter a room number");
		}
		if(activity != "breakfast"){
			if(Registrations.find({userId:userId,activity:activity}).fetch().length > 0)
				throw new Meteor.Error("already-registered", "Vous avez déjà réservé pour cet évènement");
		}
		if(Meteor.users.find({_id:userId}).fetch().length != 1)
		throw new Meteor.Error("user-not-found", "Veuillez vous connecter.");
		Registrations.insert({
			userId:userId,
			name:Meteor.users.findOne(userId).services.google.name,
			activity:activity,
			date:date,
			comment:comment,
			residence:residence,
			room:room
		})
	}
});