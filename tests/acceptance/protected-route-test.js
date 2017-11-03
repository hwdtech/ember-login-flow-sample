import { test } from 'qunit';
import moduleForAcceptance from 'auth-flow/tests/helpers/module-for-acceptance';
import { currentURL } from 'ember-native-dom-helpers';
import ProtectedPage from '../pages/protected-page';

moduleForAcceptance('Acceptance | protected route');

test('visiting /protected w/o authentication should redirect to login', async function(
  assert
) {
  await ProtectedPage.visit();
  assert.equal(currentURL(), '/login');
});
