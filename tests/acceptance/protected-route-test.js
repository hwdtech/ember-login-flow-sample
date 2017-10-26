import { test } from 'qunit';
import moduleForAcceptance from 'auth-flow/tests/helpers/module-for-acceptance';
import { visit, currentURL } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | protected route');

test('visiting /protected w/o authentication should redirect to login', async function(
  assert
) {
  await visit('/protected');
  assert.equal(currentURL(), '/login');
});
