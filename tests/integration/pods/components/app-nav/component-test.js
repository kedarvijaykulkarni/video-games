import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
// import { pauseTest } from '@ember/test-helpers';

module('Integration | Component | app-nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AppNav />`);

    assert.equal(this.element.textContent.trim(), 'Home');

    // Template block usage:
    await render(hbs`
       {{#app-nav}}
        template block text
      {{/app-nav}}
    `);

    // await pauseTest()

    assert.ok(find('[data-link="index"]'), 'link to Home is present');
  });
});
