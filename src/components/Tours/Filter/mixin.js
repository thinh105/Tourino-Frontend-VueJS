import { mapActions, mapGetters } from 'vuex';
import { FETCH_TOURS } from '@/store/type/actions.js';

export default (field, fetchFieldAction) => ({
  data: () => ({
    search: null,
    selection: [],
  }),

  computed: {
    ...mapGetters([field]),
  },

  watch: {
    selection() {
      this.getFilteredTours(field);
    },
  },

  methods: {
    ...mapActions([FETCH_TOURS, fetchFieldAction]),
    getFieldList() {
      if (!this[field].length) this[fetchFieldAction]();
    },
    getFilteredTours() {
      const filterQuery = this.selection.length
        ? {
            [field]: { all: this.selection },
          }
        : undefined;

      this[FETCH_TOURS](filterQuery);
    },
    removeFilterItem(removedItem, array) {
      for (let i = 0; i < array.length; i += 1) {
        // eslint-disable-next-line security/detect-object-injection
        if (array[i] === removedItem) {
          array.splice(i, 1);
        }
      }
    },
  },
});
