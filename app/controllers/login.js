/* eslint-disable ember/alias-model-in-controller */

import Controller from '@ember/controller';
import { debug } from '@ember/debug';

export default Controller.extend({
  actions: {
    onSubmit(payload) {
      debug(payload);
    },

    onCancel() {
      this.transitionToRoute('application');
    }
  }
});

/* eslint-enable ember/alias-model-in-controller */
