import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | euro-formater', function (hooks) {
  setupRenderingTest(hooks);

  test('EURO formating it renders', async function (assert) {
    await render(hbs`<EuroFormater @amount={{0}}/>`);
    assert.equal(this.element.textContent.trim(), '0,00€');
  });

  test('EURO formating test with two digit', async function (assert) {
    // test with two digit
    await render(hbs`<EuroFormater @amount={{16.79}} />`);
    assert.equal(this.element.textContent.trim(), '16,79€');
  });

  test('EURO formating test with five digit', async function (assert) {
    // test with two digit
    await render(hbs`<EuroFormater @amount={{10135.79}} />`);
    assert.equal(this.element.textContent.trim(), '10.135,79€');
  });
});
