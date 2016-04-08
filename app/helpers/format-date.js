import Ember from 'ember';
// import moment from 'moment';

export function formatDate() {
  return moment().format('MMMM Do YYYY');
}

export default Ember.Helper.helper(formatDate);
