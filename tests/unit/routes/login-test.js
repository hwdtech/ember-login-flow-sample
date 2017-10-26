import { moduleFor, test } from 'ember-qunit';

moduleFor('route:login', 'Unit | Route | login', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should delegate controller reset', function(assert) {
  let route = this.subject();

  assert.expect(1);

  let controller = {
    reset() {
      assert.step('Reset call');
    }
  };

  route.resetController(controller);
});
