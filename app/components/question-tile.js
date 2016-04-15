import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),


  actions: {
    addToFavorite(item) {
      this.get('favoriteQuestion').add(item);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer3(params) {
       var newAnswer = this.store.createRecord('answer', params);
       var question = params.question;
       question.get('answers').addObject(newAnswer);
       newAnswer.save().then(function() {
         return question.save();
       });
       this.transitionTo('question', params.question);
     },
  }
});
