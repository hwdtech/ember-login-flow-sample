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
  await fillIn('form input[name=identity]', 'user');
  await fillIn('form input[name=password]', 'password');
  await click('form button[type=submit]');

  assert.equal(currentURL(), '/protected');
});

test('user should see error message about invalid credentials', async function(
  assert
) {
  await visit('/login');
  await fillIn('form input[name=identity]', 'admin');
  await fillIn('form input[name=password]', 'password');
  await click('form button[type=submit]');

  assert.ok(find('[data-error-message]').textContent);
});
