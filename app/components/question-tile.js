import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),

  actions: {
    addToFavorite(favorites) {
      this.get('favoriteQuestion').add(favorites);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
