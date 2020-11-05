import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './nav.html'

Template.nav.events({
    'click .js-logout'(event, instance) {
        Meteor.logout(function(err) {
          FlowRouter.go('/');
        });
    }
});