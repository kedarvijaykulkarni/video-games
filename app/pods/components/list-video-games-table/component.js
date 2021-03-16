import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  tagName: 'table',
  classNames: ['list-video-games-table', 'table'],
  attributeBindings: ['dataTest:data-test'],

  dataTest: 'test-list-video-games-table',

  orderBy: null,

  order: 'dsc',

  dataSorted: computed('data', 'orderBy', 'isSortedAsc', function () {
    if (isEmpty(this.orderBy)) {
      return this.data;
    }

    return this.isSortedAsc
      ? this.data.sortBy(this.orderBy)
      : this.data.sortBy(this.orderBy).reverse();
  }),

  isSortedAsc: computed('order', function () {
    return this.order === 'asc';
  }),

  headers: computed(function () {
    return [
      {
        title: 'Title',
        sortfield: 'title',
        isSortable: true,
        isShow: true,
        className: ['p-a-0 tl'],
      },
      {
        title: 'Genre',
        sortfield: 'genre',
        isSortable: true,
        isShow: true,
        className: ['p-a-0'],
      },
      {
        title: 'Tags',
        sortfield: 'tags',
        isSortable: false,
        isShow: true,
        className: ['p-a-0 tl'],
      },
      {
        title: 'Release date',
        sortfield: 'releaseDate',
        isSortable: true,
        isShow: true,
        className: ['p-a-0 tl'],
      },
      {
        title: 'Price',
        sortfield: 'price',
        isSortable: true,
        isShow: true,
        className: ['p-a-0'],
      },
    ];
  }),

  actions: {
    sortData(sortOn) {
      if (this.orderBy != sortOn) {
        set(this, 'isSortedAsc', true);
        set(this, 'order', 'asc');
      } else {
        set(this, 'isSortedAsc', !this.isSortedAsc);
        set(this, 'order', this.isSortedAsc ? 'asc' : 'dsc');
      }
      set(this, 'orderBy', sortOn);
    },
    deleteGame(game) {
      /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
       *              All is works with server only!!!!            *
       * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
      if (confirm('are you sure?')) {
        if (this.deleteRecord) {
          this.deleteRecord(game.id);
        }
      }
    },
  },
});
