import { moduleForComponent, test } from 'ember-qunit';
import { click, fillIn, find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'auth-flow/tests/helpers/test-selector';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{login-form}}`);

  assert.ok(find('form'));
  assert.ok(find(testSelector('username')));
  assert.ok(find(testSelector('password')));
  assert.ok(find(testSelector('login-button')));
  assert.ok(find(testSelector('reset-button')));
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

  await fillIn(testSelector('username'), identity);
  await fillIn(testSelector('password'), password);
  await click(testSelector('login-button'));
});

test('it should handle cancel', async function(assert) {
  assert.expect(1);

  this.set('onCancel', () => assert.step('Cancel handler'));

  this.render(hbs`{{login-form onCancel=onCancel}}`);

  await click(testSelector('reset-button'));
});
