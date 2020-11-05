import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "dashboard",
  triggersEnter: [function(context, redirect) {
    console.log(Meteor.userId());
    if(Meteor.userId()){
      redirect('/home');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('login', {
      main: "atForm",
      nav: "nav",
    });
  }
});

FlowRouter.route('/home', {
  name: 'home',
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      main: "home",
      nav: "nav",
    });
  }
});

FlowRouter.route('/about', {
    name: "about",
    action: function(params, queryParams) {
      BlazeLayout.render('layout', {
        footer: "footer",
        main: "about",
        nav: "nav",
      });
    }
  });

FlowRouter.route('/private', {
  name: "private",
  //triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      main: "private",
      nav: "nav",
    });
  }
});

FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn], {except: ["dashboard"]});


//Routes
//AccountsTemplates.configureRoute('changePwd');
// AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('forgotPwd');
// AccountsTemplates.configureRoute('resetPwd');
//AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signIn', {
  path: '/',
});
// AccountsTemplates.configureRoute('signUp');
// AccountsTemplates.configureRoute('verifyEmail');