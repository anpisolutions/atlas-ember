import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('workflow', params.workflow_id);
  },

  afterModel: function(model, transition) {
    console.log(model.get('gate_ids').objectAt(0));
    return this.transitionTo("workflow.gate.task", model.get('gate_ids').objectAt(0));
  }
});
