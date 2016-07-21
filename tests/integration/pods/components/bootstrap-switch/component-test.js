import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-switch', 'Integration | Component | bootstrap switch', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-switch}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-switch}}
      template block text
    {{/bootstrap-switch}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
