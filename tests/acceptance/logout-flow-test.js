import { test } from 'qunit';
import moduleForAcceptance from 'auth-flow/tests/helpers/module-for-acceptance';
import { visit, currentURL, click } from 'ember-native-dom-helpers';
import { authenticateSession } from 'auth-flow/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | logout flow');

test('user should be able to logout', async function(assert) {
  await authenticateSession(this.application, {
    username: 'user',
    password: 'password'
  });

  await visit('/protected');
  await click('[data-logout-button]');

  assert.equal(currentURL(), '/');
});
