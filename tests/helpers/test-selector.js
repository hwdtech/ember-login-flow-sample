import { find } from 'ember-native-dom-helpers';
export default function testSelector(element) {
  return find(`[data-test-${element}]`);
}
