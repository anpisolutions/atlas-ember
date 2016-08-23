import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('workflow');
    },

    setupController: function(controller, model) {
        controller.set('workflow', model);
    },

    actions: {
        createRec: function(rec) {
            var _this = this;
            rec.save().then(function() {
                rec.deleteRecord();
                _this.transitionTo('workflow');
            }).catch(function(resp) {
                alert("Failed adding Record.");
            });
        }
    }    
});
