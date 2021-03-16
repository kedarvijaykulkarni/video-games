import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list-video-games-table', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('game', [
      {
        title: 'Hades',
        genreId: 1,
        genre: 'RPG',
        price: 16.79,
        releaseDate: '2020-09-17',
        tags: ['Action roguelike', 'roguelike', 'Action', 'indie'],
      },
    ]);

    this.set('clicked', false);

    this.set('test', () => {
      this.set('clicked', true);
    });
  });

  test('it renders and table row set the values', async function (assert) {
    await render(hbs`<ListVideoGamesTable 
        @data={{game}}
        deleteRecord={{action test}}
      />`);

    assert.equal(
      find('td[data-test="td-title"]').innerText,
      this.game[0].title,
      'Title is set correctly'
    );

    assert.equal(
      find('td[data-test="td-genre"]').innerText,
      this.game[0].genre,
      'Genre is set correctly'
    );

    assert.equal(
      find('td[data-test="td-tags"] > span.tag').innerText,
      this.game[0].tags[0],
      'Tags is set correctly'
    );

    assert.equal(
      find('td[data-test="td-release-date"]').innerText,
      '17-09-2020',
      'Release date is set correctly'
    );

    assert.equal(
      find('td[data-test="td-price"] > div').innerText,
      '16,79€',
      'Genre is set correctly'
    );
  });
});
