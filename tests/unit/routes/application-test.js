import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should inherit simple auth application mixin', function(assert) {
  let route = this.subject();
  assert.ok(route.sessionAuthenticated);
  assert.ok(route.sessionInvalidated);
});
