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
	}
});

Template.register.rendered = function () {
	switch(this.data.activity) {
			case 'show':
				Session.set("activity_text", TAPi18n.__("register_show"));
				Session.set("activity", "show");
				break;
			case 'laser':
				Session.set("activity_text", TAPi18n.__("register_laser"));
				Session.set("activity", "laser");
				break;
			case 'contest':
				Session.set("activity_text", TAPi18n.__("register_contest"));
				Session.set("activity", "contest");
				break;			
			default:
				
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