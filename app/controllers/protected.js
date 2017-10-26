import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject(),
  actions: {
    logout() {
      return get(this, 'session').invalidate();
    }
  }
});
