import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  gates: DS.attr('number'),
  tasks: DS.attr('number'),
  usageCountInProg: DS.attr('number'),
  usageCountComp: DS.attr('number'),
  duration: DS.attr('string'),
  createdOn: DS.attr('string'),
  updatedOn: DS.attr('string'),
  createdBy: DS.attr('string'),
  updatedBy: DS.attr('string'),
  status: DS.attr('boolean')
});
