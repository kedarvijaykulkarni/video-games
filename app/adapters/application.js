import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  // host: 'http://localhost:3001',
  headers:  computed(function () {
    return {
      'dataType':  'json',
      'contentType':  'application/vnd.api+json',
      'Content-Type':  'application/vnd.api+json'
    };
  }),

});