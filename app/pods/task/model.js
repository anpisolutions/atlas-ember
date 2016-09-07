import DS from 'ember-data';

export default DS.Model.extend({
      partner_id: DS.attr('number'),
      name: DS.attr('string'),
      task_template_id: DS.attr('number'),
      seq_number: DS.attr('number'),
      system_task_id: DS.attr('number'),
      duration: DS.attr('number'),
      functional_group_id: DS.attr('number'),
      is_system_task: DS.attr('boolean'),
      duration_unit: DS.attr('string'),
      is_milestone: DS.attr('boolean'),
      comments: DS.attr('string'),
      created_at: DS.attr('number'),
      created_by: DS.attr('string'),
      updated_at: DS.attr('number'),
      updated_by: DS.attr('string'),
      is_skippable: DS.attr('boolean'),
      is_critical: DS.attr('boolean')
});
