import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('workflow');
  this.route('workflow/new', {path:'workflow/new'});
  this.route('workflow/edit', {path:'workflow/edit'});

  this.route('serviceorder', function() {
    this.route('opentasks');
    this.route('serviceorders');
    this.route('didlnpordermgmt');
    this.route('residentialorders');
    this.route('residentialdidlnp');
  });
});
console.log("Router==",Router);
export default Router;
