import { test } from 'qunit';
import moduleForAcceptance from 'auth-flow/tests/helpers/module-for-acceptance';
import { currentURL } from 'ember-native-dom-helpers';
import {
  authenticateSession,
  invalidateSession
} from 'auth-flow/tests/helpers/ember-simple-auth';
import ProtectedPage from '../pages/protected-page';

moduleForAcceptance('Acceptance | logout flow', {
  afterEach() {
    return invalidateSession(this.application);
  }
});

test('user should be able to logout', async function(assert) {
  await authenticateSession(this.application, {
    username: 'user',
    password: 'password'
  });
  await ProtectedPage.visit();
  await ProtectedPage.clickLogoutButton();

  assert.equal(currentURL(), '/');
});
