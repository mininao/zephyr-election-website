// Config

Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  waitOn: function () {
    if (Meteor.userId()) {
      this.subscribe("userData").wait();
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
  name: 'home'
});


// GAME PAGE
/*Router.route('/game', function () {

  this.render('game');

}, {
  name: 'game',
  waitOn: function () {

    if (Meteor.userId()) {
      this.subscribe("challenges").wait();
      this.subscribe("userData").wait();
      this.subscribe("userCount").wait();
    }  
  }
});*/


// ADMIN ROUTES
