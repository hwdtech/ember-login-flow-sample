import Mixin from '@ember/object/mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Mixin.create(AuthenticatedRouteMixin, {
  authenticationRoute: 'login',
  routeAfterAuthentication: 'protected',
  routeIfAlreadyAuthenticated: 'protected'
});
