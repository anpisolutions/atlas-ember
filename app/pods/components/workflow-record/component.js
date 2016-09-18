import Ember from 'ember';

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
