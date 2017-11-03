import { visit, fillIn, click, find } from 'ember-native-dom-helpers';
import Ember from 'ember';

const Page = Ember.Object.extend({
  visitable(link) {
    return visit(link);
  },
  fillable(element, value) {
    return fillIn(element, value);
  },
  clickable(element) {
    return click(element);
  },
  findable(element) {
    return find(element);
  }
});

export default Page;
