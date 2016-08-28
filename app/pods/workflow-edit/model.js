import DS from 'ember-data';

export default DS.Model.extend({
    partner_id: DS.attr('number'),
    name: DS.attr('string'),
    workflow_id: DS.attr('number'),
    task_template_id: DS.attr('number'),
    functional_group_id: DS.attr('number'),
    seq_number: DS.attr('number'),
    comments: DS.attr('string'),
    is_skippable: DS.attr('boolean'),
    created_at: DS.attr('date'),
    created_by: DS.attr('string'),
    updated_at: DS.attr('date'),
    updated_by: "DS.attr('string')",
    duration: DS.attr('number')
});

