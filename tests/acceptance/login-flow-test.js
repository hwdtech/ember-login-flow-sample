import { test } from 'qunit';
import moduleForAcceptance from 'auth-flow/tests/helpers/module-for-acceptance';
import { currentURL } from 'ember-native-dom-helpers';
import { invalidateSession } from 'auth-flow/tests/helpers/ember-simple-auth';
import LoginPage from '../pages/login-page';
moduleForAcceptance('Acceptance | login flow', {
  afterEach() {
    return invalidateSession(this.application);
  }
});

test('user should be able to login', async function(assert) {
  await LoginPage.visit();
  await LoginPage.username('user');
  await LoginPage.password('password');
  await LoginPage.clickLoginButton();

  assert.equal(currentURL(), '/protected');
});

test('user should see error message about invalid credentials', async function(
  assert
) {
  await LoginPage.visit();
  await LoginPage.username('admin');
  await LoginPage.password('password');
  await LoginPage.clickLoginButton();

  assert.ok(LoginPage.errorsText());
});
