import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter} from 'meteor/kadira:flow-router';

// FlowRouter.route('/', {
//   action() {
//       BlazeLayout.render('layout', {
//         footer: "footer",
//         main: "home",
//         nav: "nav",
//       });  }
// });


FlowRouter.route('/', {
    name: "home",
    action: function(params, queryParams) {
      BlazeLayout.render('layout', {
        footer: "footer",
        main: "home",
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
  
//   FlowRouter.notFound = {
//     action: function() {
//       BlazeLayout.render('layout', {
//         footer: "footer",
//         main: "pageNotFound",
//         nav: "nav",
//       });
//     }
//   };
  

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
