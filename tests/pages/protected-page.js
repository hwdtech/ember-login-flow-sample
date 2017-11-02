import testSelector from 'auth-flow/tests/helpers/test-selector';
import Page from 'auth-flow/tests/helpers/page-object';

const ProtectedPage = Page.extend({
  visit() {
    return this.get('visitable')('protected');
  },
  clickLogoutButton() {
    return this.get('clickable')(testSelector('logout-button'));
  }
});

export default ProtectedPage.create();
