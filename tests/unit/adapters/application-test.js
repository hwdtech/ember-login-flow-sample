import { moduleFor, test } from 'ember-qunit';
import { get } from '@ember/object';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  needs: ['authorizer:application', 'service:session']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});

test('it should define namespace', function(assert) {
  let adapter = this.subject();

  assert.equal(adapter.namespace, 'api/');
});

test('it should use simple auth mixin', function(assert) {
  let adapter = this.subject();

  assert.ok(get(adapter, 'session'));
  assert.ok(get(adapter, 'authorizer'));
});

test('it should use application authorizer', function(assert) {
  let adapter = this.subject();

  assert.equal(adapter.authorizer, 'authorizer:application');
});
