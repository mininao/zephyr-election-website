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
	Session.setDefault("activity", "Laser Game");
	Session.setDefault("date", "Mardi 19h");
}

Template.register.helpers({
	activity: function () {
		return Session.get("activity");
	},
	date: function() {
		return Session.get('date');
	}
});