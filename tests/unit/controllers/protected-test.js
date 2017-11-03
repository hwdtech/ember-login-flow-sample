import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:protected', 'Unit | Controller | protected', {
  // Specify the other units that are required for this test.
  needs: ['service:authenticator']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
