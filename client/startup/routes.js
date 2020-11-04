import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'home',
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      footer: "footer",
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
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      footer: "footer",
      main: "private",
      nav: "nav",
    });
  }
});

FlowRouter.route('/sign-in', {
  name: "signIn",
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      footer: "footer",
      main: "atForm",
      nav: "nav",
    });
  }
});

//Routes
//AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');