import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | video-games', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:video-games');
    assert.ok(route);
  });
});
