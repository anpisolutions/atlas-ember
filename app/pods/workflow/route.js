import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
     return this.store.findAll('workflow');
  },
  activate: function() {
    if(this.controllerFor("application").get('hide')) {
      Ember.$("#my_workflows").removeClass("is-hidden");
      this.controllerFor("application").set('hide', false);
    }
  },
  deactivate: function() {
    console.log("Workflow deactivate");
  },
  actions:{
    _buttonClick: function(){
     
    },
    navigate: function(){
   
    }
  }

});
