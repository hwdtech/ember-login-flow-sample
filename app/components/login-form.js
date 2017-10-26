import Component from '@ember/component';
import { getProperties } from '@ember/object';

export default Component.extend({
  tagName: 'form',

  identity: '',
  password: '',

  actions: {
    onSubmit() {
      this.getAttr('onSubmit')(getProperties(this, 'identity', 'password'));
    },

    onCancel() {
      this.getAttr('onCancel')();
    }
  }
});
