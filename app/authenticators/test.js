import AppAuthenticator from './application';

export default AppAuthenticator.extend({
  authenticate(payload) {
    return this._super(payload.username, payload.password);
  }
});
