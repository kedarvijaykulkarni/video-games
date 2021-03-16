import { module, test } from 'qunit';
import { visit, currentURL, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | video games', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /video-games', async function (assert) {
    await visit('/video-games');

    assert.equal(currentURL(), '/video-games');
  });

  test('Welcome header is present', async function (assert) {
    await visit('/video-games');
    assert.equal(
      this.element
        .querySelector('h1[data-test="table-title"]')
        .textContent.trim(),
      'Video Games'
    );
  });

  test('Table is present', async function (assert) {
    await visit('/video-games');
    assert.ok(find('table[data-test="test-list-video-games-table"]'));
  });

  test('Title column is present in table', async function (assert) {
    await visit('/video-games');
    assert.ok(find('th[data-test="th-title"]'));
  });

  test('Genre column is present in table', async function (assert) {
    await visit('/video-games');
    assert.ok(find('th[data-test="th-genre"]'));
  });

  test('Tags column is present in table', async function (assert) {
    await visit('/video-games');
    assert.ok(find('th[data-test="th-tags"]'));
  });

  test('Release Date column is present in table', async function (assert) {
    await visit('/video-games');
    assert.ok(find('th[data-test="th-releaseDate"]'));
  });

  test('Price column is present in table', async function (assert) {
    await visit('/video-games');
    assert.ok(find('th[data-test="th-price"]'));
  });
});
