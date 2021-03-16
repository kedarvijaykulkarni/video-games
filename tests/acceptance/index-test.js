import { module, test } from 'qunit';
import { visit, currentURL, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  test('visiting /home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), `/`);
  });

  test('visiting /video-games page', async function(assert) {
    await visit('/');
    await click('[id="video-games-link"]');
    assert.equal(currentURL(), '/video-games');
  });

  test('Welcome header is present', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelector('h1[data-test="welcome-header"]').textContent.trim(), 'Welcome');
  });

  test('Link text to navigate video games is present', async function(assert) {
    await visit('/');
    assert.ok(find('[data-link="video-games"]'), 'link to video games is present');
  });

  test('Link text to navigate application tests is present', async function(assert) {
    await visit('/');
    assert.ok(find('[data-link="tests"]'), 'link to /tests is present');
  });



});