import Route from '@ember/routing/route';
import UnAuthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnAuthenticatedRouteMixin, {
  resetController(controller) {
    this._super(...arguments);
    controller.reset();
  }
});
