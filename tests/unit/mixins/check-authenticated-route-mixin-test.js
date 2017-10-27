import EmberObject from '@ember/object';
import CheckAuthenticatedRouteMixinMixin from 'auth-flow/mixins/check-authenticated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | check authenticated route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let CheckAuthenticatedRouteMixinObject = EmberObject.extend(
    CheckAuthenticatedRouteMixinMixin
  );
  let subject = CheckAuthenticatedRouteMixinObject.create();
  assert.ok(subject);
});
