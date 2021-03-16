import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list-video-games-table/th-button', function (
  hooks
) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('header', {
      title: 'Title',
      sortfield: 'title',
      isSortable: true,
      isShow: true,
      className: ['p-a-0 tl'],
    });

    this.set('isSortedAsc', false);

    this.set('clicked', false);

    this.set('test', () => {
      this.set('clicked', true);
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`<ListVideoGamesTable::ThButton 
        @title={{header.title}}
        @className={{header.className}}
        @sortField={{header.sortfield}}
        @isSortedAsc={{isSortedAsc}}
        @isSortable={{header.isSortable}}
        @sortData={{action test}}
      />`);
    assert.equal(this.element.textContent.trim(), 'Title');
  });

  test('Table header created', async function (assert) {
    await render(hbs`<ListVideoGamesTable::ThButton 
        @title={{header.title}}
        @className={{header.className}}
        @sortField={{header.sortfield}}
        @isSortedAsc={{isSortedAsc}}
        @isSortable={{header.isSortable}}
        @sortData={{action test}}
      />`);
    assert.ok(find('th[data-test="th-title"]'));
  });

  test('have button for sorting', async function (assert) {
    await render(hbs`<ListVideoGamesTable::ThButton 
        @title={{header.title}}
        @className={{header.className}}
        @sortField={{header.sortfield}}
        @isSortedAsc={{isSortedAsc}}
        @isSortable={{header.isSortable}}
        @sortData={{action test}}
      />`);
    assert.ok(find('button[data-test-sort="title"]'));
  });

  test('button is get clicked', async function (assert) {
    await render(hbs`<ListVideoGamesTable::ThButton 
        @title={{header.title}}
        @className={{header.className}}
        @sortField={{header.sortfield}}
        @isSortedAsc={{isSortedAsc}}
        @isSortable={{header.isSortable}}
        @sortData={{action test}}
      />`);
    await click('button[data-test-sort="title"]');
    assert.ok(this.clicked);
  });
});
