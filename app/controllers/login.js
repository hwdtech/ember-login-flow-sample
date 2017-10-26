import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  authenticator: inject(),

  actions: {
    async onSubmit(payload) {
      try {
        await get(this, 'authenticator').authenticate(
          payload.identity,
          payload.password
        );
      } catch (authError) {
        set(this, 'errorMessage', authError.toString());
      }
    },

    onCancel() {
      this.transitionToRoute('application');
    }
  },

  reset() {
    set(this, 'errorMessage', null);
  }
});
