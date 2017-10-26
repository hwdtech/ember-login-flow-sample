import { moduleFor, test } from 'ember-qunit';
import EmberObject, { get } from '@ember/object';

moduleFor('controller:login', 'Unit | Controller | login', {
  // Specify the other units that are required for this test.
  needs: ['service:authenticator']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('it should call authenticate service', function(assert) {
  const identity = '123';
  const password = 'password';

  const AuthService = EmberObject.extend({
    authenticate(id, pass) {
      assert.equal(id, identity);
      assert.equal(pass, password);
    }
  });

  this.register('service:authenticator', AuthService);
  this.inject.service('authenticator', { as: 'authService' });

  assert.expect(2);

  let controller = this.subject();

  controller.send('onSubmit', {
    identity,
    password
  });
});

test('it should handle auth failure', function(assert) {
  const errorMessage = 'Failed';

  const AuthService = EmberObject.extend({
    authenticate() {
      throw new Error(errorMessage);
    }
  });

  this.register('service:authenticator', AuthService);
  this.inject.service('authenticator', { as: 'authService' });

  let controller = this.subject();

  controller.send('onSubmit', {
    identification: 123,
    password: 123
  });

  assert.equal(get(controller, 'errorMessage'), `Error: ${errorMessage}`);
});

test('it should reset error message', function(assert) {
  let controller = this.subject({
    errorMessage: 'Foo'
  });

  controller.reset();

  assert.equal(get(controller, 'errorMessage'), null);
});
