import syncSelectionWithUrl from './syncSelectionWithUrl';
import isEqual from '../ultils/doArraysHasSameElements';

export default {
  mixins: [syncSelectionWithUrl('price')],

  methods: {
    isDeadlock() {
      return (
        isEqual(this.selection, this.$route.query.price) ||
        (this.isDefaultPrice() && !this.$route.query.price)
      );
    },
    setFilterQuery(filterQuery) {
      if (this.isDefaultPrice()) {
        delete filterQuery.price;
      } else filterQuery.price = this.selection;

      return filterQuery;
    },

    isDefaultPrice() {
      return isEqual(this.selection, this.defaultSelection);
    },
  },
  //   setUrlFromSelection() {
  //     if (isSelectionEqualUrlQuery(this.selection, this.$route.query[field]))
  //       return;

  //     const filterObject = { ...this.$route.query }; // The route object is immutable

  //     if (this.selection && this.selection.length > 0) {
  //       filterObject[field] = this.selection;
  //     } else {
  //       delete filterObject[field];
  //     }

  //     if (
  //       field === 'price' &&
  //       filterObject.price &&
  //       filterObject.price.includes(0) &&
  //       filterObject.price.includes(1050)
  //     ) {
  //       delete filterObject.price;
  //     }
  //     this.$router.push({ path: 'tours', query: filterObject });
  //     // .catch(() => {});
  //   },

  //   async setSelectionFromUrl() {
  //     if (!this.$route.query[field]) {
  //       // clean selection when use back/foward in browser
  //       // to another Url not contains this field
  //       // but selection still have value

  //       if (isSelectionEqualUrlQuery(this.selection, this.initialSelection))
  //         return;

  //       this.selection = this.selection ? this.initialSelection : undefined;

  //       return;
  //     }

  //     if (isSelectionEqualUrlQuery(this.selection, this.$route.query[field])) {
  //       return;
  //     }

  //     if (typeof this.getOptionList === 'function') await this.getOptionList(); // from ./getPredefinedOption.js

  //     this.selection = [...this.$route.query[field]]; // The route object is immutable
  //   },
  // },
};
