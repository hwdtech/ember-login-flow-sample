import { test } from 'qunit';
import moduleForAcceptance from 'auth-flow/tests/helpers/module-for-acceptance';
import { visit, currentURL, fillIn, click } from 'ember-native-dom-helpers';
import { invalidateSession } from 'auth-flow/tests/helpers/ember-simple-auth';
import testSelector from 'auth-flow/tests/helpers/test-selector';

moduleForAcceptance('Acceptance | login flow', {
  afterEach() {
    return invalidateSession(this.application);
  }
});

test('user should be able to login', async function(assert) {
  await visit('/login');
  await fillIn(testSelector('username'), 'user');
  await fillIn(testSelector('password'), 'password');
  await click(testSelector('login-button'));

  assert.equal(currentURL(), '/protected');
});

test('user should see error message about invalid credentials', async function(
  assert
) {
  await visit('/login');
  await fillIn(testSelector('username'), 'admin');
  await fillIn(testSelector('password'), 'password');
  await click(testSelector('login-button'));

  assert.ok(testSelector('error-message').textContent);
});
