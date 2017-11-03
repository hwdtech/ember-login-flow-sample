import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  authenticator: inject(),
  actions: {
    async logout() {
      try {
        await get(this, 'authenticator').invalidate();
      } catch (authError) {
        set(this, 'errorMessage', authError.toString());
      }
    }
  }
});
