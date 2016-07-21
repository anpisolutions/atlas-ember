import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
    butLabel: function() {
        return (this.get('rec').id) ? 'Update' : 'Add';
    }.property(),

    actions: {
        submit: function() {
            this.sendAction('action', this.get('rec'));
        }
    }
});
