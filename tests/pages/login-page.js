import testSelector from 'auth-flow/tests/helpers/test-selector';
import Page from 'auth-flow/tests/helpers/page-object';

const LoginPage = Page.extend({
  visit() {
    return this.get('visitable')('login');
  },
  username(value) {
    return this.get('fillable')(testSelector('username'), value);
  },
  password(value) {
    return this.get('fillable')(testSelector('password'), value);
  },
  clickLoginButton() {
    return this.get('clickable')(testSelector('login-button'));
  },
  clickCancelButton() {
    return this.get('clickable')(testSelector('reset-button'));
  },
  errorsText() {
    return this.get('findable')(testSelector('error-message')).textContent;
  }
});

export default LoginPage.create();
