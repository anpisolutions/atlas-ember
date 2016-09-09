import DS from 'ember-data';
import moment from 'moment';


export default DS.Model.extend({
  partner_id: DS.attr('number'),
  name: DS.attr('string'),
  source_id: DS.attr('number'),
  is_default: DS.attr('boolean'),
  created_at: DS.attr('date', {
    defaultValue() {  return moment(new Date()) ; }
  }),
  created_by: DS.attr('string'),
  updated_at: DS.attr('date', {
    defaultValue() { return moment(new Date()) ; }
  }),
  updated_by: DS.attr('string'),
  gate_ids: DS.hasMany('gates', { async: true }),
  is_active: DS.attr('boolean'),
  duration: DS.attr('number'),
  is_deleted: DS.attr('boolean'),
  gates_count: DS.attr('number'),
  tasks_count: DS.attr('number')
});
