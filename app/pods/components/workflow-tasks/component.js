import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: ['isDisabled'],
  isDisabled: false,
  label: null,
  value: false,
  isChecked: Ember.computed.alias('value'),

  click: function() {
    this.sendAction('navigate');
    if (!this.get('isDisabled')) {
      this.toggleProperty('isChecked');
    }
  }
});
