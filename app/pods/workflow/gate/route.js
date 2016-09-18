import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('workflow', params.workflow_id);
  },
  activate: function() {
    Ember.$("#my_workflows").addClass("is-hidden");
    this.controllerFor("application").set('hide', true);
  },
  afterModel: function(model, transition) {
    if(transition.sequence === 0) {
      return this.transitionTo("workflow");
    }
    return this.transitionTo("workflow.gate.task", model.get('gate_ids').objectAt(0));
  }
});
