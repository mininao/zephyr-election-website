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
		defaultLanguage: 'fr',
        exclude: {
          // Paths beginning with "/admin"
         	admin_paths: '^\/admin',
			admin2: '/admin'
		},
		server: {
			exclude: {
				admin_paths: '^\/admin',
				admin2: '/admin'
			}
		}

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

Router.route('/register/:activity', function () {
  this.render('register', {
    data: {activity:this.params.activity}
  });
  
}, {
  name: 'register'
});

Router.route('/week', function () {
  this.render('week');
  
}, {
  name: 'week'
});


Router.route('/team', function () {
  this.render('team');
  
}, {
  name: 'team'
});

