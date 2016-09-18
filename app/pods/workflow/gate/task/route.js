import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.gate_id);
    return this.store.findRecord('gate', params.gate_id);
  },
  activate: function() {
    console.log("task: " + this.controllerFor("application").get('hide'));
    if(this.controllerFor("application").get('hide') === false) {
      Ember.$("#my_workflows").addClass("is-hidden");
      this.controllerFor("application").set('hide', true);
    }
  },
  afterModel: function(model, transition) {
    if(transition.sequence === 0) {
      return this.transitionTo("workflow");
    }
  }
});
