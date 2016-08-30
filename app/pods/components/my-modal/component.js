import Ember from 'ember';


export default Ember.Component.extend({
	 actions: {
        toggleModal: function() {
            // OLD: this.set('enabled', !this.get('enabled'));
            this.toggleProperty('enabled'); 
            // Thanks for the tip, Joel!
        },
    },

});

