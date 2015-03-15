Template.register.events({
	"click .login": function (event) {
		if (!Meteor.userId())
			Meteor.loginWithGoogle({
				loginStyle: "popup"
			});
	},
	"click .logout": function (event) {
		Meteor.logout(function (error) {
			alert(error.reason);
		});
	},
	"click .input.validate": function(ev) {
		var activity = Session.get("activity");
		var date = Session.get("date");
		var comment = $("input#comment").val();
		var residence,room;
		if(activity == "breakfast") {
			residence = $("input.residence").val();
			room = $("input.room").val();
		}
		//swal("coucou")
		Meteor.call("register", Meteor.userId(), activity, date, comment, residence, room, function (error, result) {
		if (!_.isUndefined(error)) {
			sweetAlert("Nom d'une pipe !", error.reason, "error");
		}
		if (!_.isUndefined(result) && result.valid) {
			sweetAlert("C'est tipar.", "Réservation effectuée", "success");
		}
		});
		
	}
});

Template.register.rendered = function () {
/********** DELETE THIS \/ ***************/	
	Meteor.subscribe("xx");
/********** DELETE THIS /\ ***************/
	switch(this.data.activity) {
			case 'show':
				Session.set("activity_text", TAPi18n.__("register_show"));
				Session.set("activity", "show");
				break;
			case 'laser':
				Session.set("activity_text", TAPi18n.__("register_laser"));
				Session.set("activity", "laser");
				break;
			case 'breakfast':
				Session.set("activity_text", TAPi18n.__("register_contest"));
				Session.set("activity", "breakfast");
				break;			
			default:
				swal("Damned","Cet évènement n'existe pas (Bien tenté.)","error");
				Router.go('home');
				
	}
	//Session.set("activity_text", this.data.activity);
	//Session.setDefault("date", "Mardi 19h");
}

Template.register.helpers({
	activity: function () {
		return Session.get("activity_text");
	},
	date: function() {
		return Session.get('date');
	}
});