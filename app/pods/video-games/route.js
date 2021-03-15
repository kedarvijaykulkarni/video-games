import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';
// import moment from 'moment';

export default Route.extend({
  // queryParams: {
  //   orderBy: null
  // },

  genres: null,

  async model(param) {
    const genres = await this.store.findAll('genre').then((results) => {
      this.genres = results;
    });
    return RSVP.hash({
      genres,
      query: param, // just added if we use server side sorting
      results: this.getAllGames(param),
    });
  },

  async getAllGames(/*param*/) {
    return this.store.findAll('video-game').then((results) => {
      return results.forEach((game) => {
        const genreName = this.genres.filter((g) => game.genreId == g.id);
        if (!isEmpty(genreName)) {
          game.genre = genreName[0].name;
        }
        game.releaseDate =
          game.releaseDate != 'Invalid Date' ? new Date(game.releaseDate) : '-';
      });
    });

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      Following are two methods where
      * `findAll`
      * `query with-param`` 
      FE side table sorting is not recommended
      especially for long resultset with pagination data,
      to get sorting data from the backend we need to pass the query param
      which is achieved by the second `query with-param method`
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /*
      return this.store.findAll('video-game').then((results) => {
        results.forEach((game)=> {
          const genreName = this.genres.filter((g) => game.genreId == g.id);
          if(!isEmpty(genreName)) {
            game.genre = genreName[0].name;
          }
          game.releaseDate = moment(game.releaseDate).format('DD-MM-YYYY');
        });
        if(param && param.orderBy) {
          return results.sortBy(param.orderBy)
        } else {
          return results;
        }
      });
    */

    /*
      // sorting should done on server side hence query param set here
      // https://stackoverflow.com/questions/40411056/ember-store-sort-filter-find-records
      let orderBy = param && param.orderBy ? { orderBy: param.orderBy } : {};
      return this.store.query('video-game', orderBy).then((results) => {
        results.forEach((game)=> {
          const genreName = this.genres.filter((g) => game.genreId == g.id);
          if(!isEmpty(genreName)) {
            game.genre = genreName[0].name;
          }
          game.releaseDate = moment(game.releaseDate).format('DD-MM-YYYY');
        });
        if(param && param.orderBy) {
          return results.sortBy(param.orderBy).reverse()
        } else {
          return results;
        }
      });
    */
  },
});
