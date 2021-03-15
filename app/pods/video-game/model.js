import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  genreId: attr('number'),
  genre: attr('text'),
  price: attr('number'),
  tags: attr(),
  releaseDate: attr('date'),
  videoGames: belongsTo('video-games'),
});

