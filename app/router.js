import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('workflow', function() {
    this.route('gate', { path: 'gate/:workflow_id' }, function() {
      this.route('task', { path: 'task/:gate_id' });
    });
  });
  this.route('serviceorder', function() {
    this.route('opentasks');
    this.route('serviceorders');
    this.route('didlnpordermgmt');
    this.route('residentialorders');
    this.route('residentialdidlnp');
  });
  this.route('workflowNew', {path:'workflow/new'});
  this.route('workflowEdit', {path:'workflow/edit/:id'}, function() {
    this.resource("gates")
  });
});
console.log("Router==",Router);

Router.reopen({
  location: 'history'
});


export default Router;
