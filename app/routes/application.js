import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: 'protected',
  redirect() {
    this.transitionTo('protected');
  },

  sessionInvalidated() {
    this.transitionTo('index');
  }
});
