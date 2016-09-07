import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.gate_id);
    return this.store.findRecord('gate', params.gate_id);
  }
});
