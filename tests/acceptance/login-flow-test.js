import { test } from 'qunit';
import moduleForAcceptance from 'auth-flow/tests/helpers/module-for-acceptance';
import {
  visit,
  currentURL,
  fillIn,
  click,
  find
} from 'ember-native-dom-helpers';
import { invalidateSession } from 'auth-flow/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | login flow', {
  afterEach() {
    return invalidateSession(this.application);
  }
});

test('user should be able to login', async function(assert) {
  await visit('/login');
  await fillIn(find('[data-test-username]'), 'user');
  await fillIn(find('[data-test-password]'), 'password');
  await click(find('[data-test-login-button]'));

  assert.equal(currentURL(), '/protected');
});

test('user should see error message about invalid credentials', async function(
  assert
) {
  await visit('/login');
  await fillIn(find('[data-test-username]'), 'admin');
  await fillIn(find('[data-test-password]'), 'password');
  await click(find('[data-test-login-button]'));

  assert.ok(find('[data-error-message]').textContent);
});
