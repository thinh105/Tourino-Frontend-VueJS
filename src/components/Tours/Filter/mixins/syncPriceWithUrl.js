import syncSelectionWithUrl from './syncSelectionWithUrl';
import isEqual from '../ultils/isEqual';

import { multipleSelection, defaultSelection } from './selection';

export default {
  mixins: [
    syncSelectionWithUrl('price'),
    multipleSelection('price'),
    defaultSelection('price'),
  ],

  methods: {
    // isSynced() {
    //   return (
    //     isEqual(this.selection, this.$route.query.price) ||
    //     (this.isDefault() && !this.$route.query.price)
    //   );
    // },
    // setFilterQuery(filterQuery) {
    //   if (this.isDefault()) {
    //     delete filterQuery.price;
    //   } else filterQuery.price = this.selection;
    //   return filterQuery;
    // },
    // isDefault() {
    //   return isEqual(this.selection, this.defaultSelection);
    // },
    // clearSelection() {
    //   if (!this.isDefault()) this.selection = this.defaultSelection;
    // },
    // hasSelectionValue: defaultSelection('price').methods.hasSelectionValue.call(
    //   this
    // ),
  },
};
