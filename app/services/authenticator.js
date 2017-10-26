import Service, { inject } from '@ember/service';
import EmberObject, { get } from '@ember/object';

export default Service.extend({
  session: inject(),

  async authenticate(identity, password) {
    try {
      await get(this, 'session').authenticate(
        'authenticator:application',
        identity,
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
