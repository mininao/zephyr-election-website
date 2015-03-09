// Config

Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  waitOn: function () {
    if (Meteor.userId()) {
      this.subscribe("userData").wait();
    }
  },
    i18n: {
		setLanguage: function(lang) {
          TAPi18n.setLanguage(lang);
        },
        languages: ['fr', 'en'],
		defaultLanguage: 'fr'

    }	
});

//Check user login
Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    // if the user is not logged in, redirect to home
    this.redirect('/');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
}, {
  only: []
});


// HOMEPAGE
Router.route('/', function () {
  this.render('home');
  
}, {
	name: 'home',
	layoutTemplate:'barebonesLayout'
});

Router.route('/program', function () {
  this.render('program');
  
}, {
  name: 'program'
});

Router.route('/register', function () {
  this.render('register');
  
}, {
  name: 'register'
});

Router.route('/team', function () {
  this.render('team');
  
}, {
  name: 'team'
});

