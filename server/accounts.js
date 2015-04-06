Accounts.config({
  restrictCreationByEmailDomain: 'edu.esiee.fr'
});

Accounts.onCreateUser(function(options, user) {
  //console.log(user);
  //console.log(options);
  if (options.profile)
    user.profile = options.profile;
  else
    user.profile = {};
  user.finishedChallenges = [];
  user.score =0;
  user.rank = Meteor.users.find().fetch().length + 1;
  return user;

});

ServiceConfiguration.configurations.insert({
service: "google",
clientId: "19232970308-p7g06dv6aqisis0thj4o25c1grtsf4bm.apps.googleusercontent.com",
secret: "a3l2tPzvwVzdSudFsAc3e3Ob", /* Example Secret ;) */
    loginStyle: "popup"
  });