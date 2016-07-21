import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
     return this.store.findAll('workflow');
  },
  actions:{
    _buttonClick: function(){
     
    },
    navigate: function(){
   
    }
  }

});
