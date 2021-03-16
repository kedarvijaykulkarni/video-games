import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  formatAmount: computed(function () {
    const re = new RegExp(String.fromCharCode(160), 'g');
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    })
      .format(this.amount)
      .toString()
      .replace(re, '');
  }),
});
