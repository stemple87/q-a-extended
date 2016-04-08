import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var timeStamp = String(moment().format('MMMM Do YYYY, h:mm:ss a'));
      console.log(timeStamp)
      var params = {
        body: this.get('body') ? this.get('body') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        timestamp: timeStamp
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
