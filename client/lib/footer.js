Template.footer.events({
	"click .logout": function (event) {
		Meteor.logout(function (error) {
			alert(error.reason);
		});
	}
});