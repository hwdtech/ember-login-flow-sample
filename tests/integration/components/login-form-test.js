import { moduleForComponent, test } from 'ember-qunit';
import { click, fillIn, find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{login-form}}`);

  assert.ok(find('form'));
  assert.ok(find('input[name=identity]'));
  assert.ok(find('input[name=password]'));
  assert.ok(find('button[type=submit]'));
  assert.ok(find('button[type=reset]'));
});

test('it should handle submit', async function(assert) {
  const identity = '123';
  const password = 'secret';

  assert.expect(2);

  this.set('onSubmit', payload => {
    assert.equal(payload.identity, identity);
    assert.equal(payload.password, password);
  });

  this.render(hbs`{{login-form onSubmit=onSubmit}}`);

  await fillIn('input[name=identity]', identity);
  await fillIn('input[name=password]', password);
  await click('button[type=submit]');
});

test('it should handle cancel', async function(assert) {
  assert.expect(1);

  this.set('onCancel', () => assert.step('Cancel handler'));

  this.render(hbs`{{login-form onCancel=onCancel}}`);

  await click('button[type=reset]');
});
