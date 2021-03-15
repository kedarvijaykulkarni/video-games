import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteRecord(id) {
      let videoGame = this.store.peekRecord('video-game', id);
      // console.log('deleteRecord :::', id);
      // console.log('videoGame :::', videoGame);
      videoGame.destroyRecord(); // => DELETE to /posts/2
    },
  },
});
