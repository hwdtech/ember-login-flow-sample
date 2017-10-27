import Route from '@ember/routing/route';
import CheckAuthenticatedRouteMixin from '../mixins/check-authenticated-route-mixin';

export default Route.extend(CheckAuthenticatedRouteMixin);
