import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './startup/accounts_templates';
import './startup/routes';

import "./layout";
import "./ui/about/about";

M.AutoInit();