import Service, { inject } from '@ember/service';
import EmberObject, { get } from '@ember/object';

export default Service.extend({
  session: inject(),

  async authenticate(identification, password) {
    try {
      return get(this, 'session').authenticate(
        'authenticator:application',
        identification,
        password
      );
    } catch (reason) {
      throw AuthenticationError.create({ reason });
    }
  }
});

export const AuthenticationError = EmberObject.extend({
  toString() {
    return (
      get(this, 'reason.message') ||
      get(this, 'reason.error') ||
      get(this, 'reason')
    );
  }
});
