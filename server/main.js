import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  // code to run on server at startup
});


const greet = welcomeMsg => (user, url) => {
  const greeting = user.profile && user.profile.name ? "Hello ".concat(user.profile.name, ",") : "Hello,";
  return "".concat(greeting, "\n\n").concat(welcomeMsg, ", clique simplement sur le lien ci-dessous.\n\n").concat(url, "\n\nThanks.\n");
};

Accounts.emailTemplates.resetPassword = {
  subject: () => Accounts.emailTemplates.siteName.concat(" : Mot de passe oublié"),
  text: greet("pour réinitiliser ton mot de passe")
};

Accounts.urls.resetPassword = function(token) {
  return Meteor.absoluteUrl('reset-password/' + token);
};

