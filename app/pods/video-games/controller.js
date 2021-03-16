import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteRecord(id) {
      // let videoGame = this.store.peekRecord('video-game', id);
      // videoGame.destroyRecord(); // => DELETE to /posts/2
      try {
        let videoGame = this.store.peekRecord('video-game', id);
        videoGame.deleteRecord();
        videoGame.isDeleted; // => true
        videoGame.save(); // => DELETE to /videoGames/1
      } catch (error) {
        window.console.log('Error: ', error);
      }
    },
  },
});
