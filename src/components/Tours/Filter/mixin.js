import { mapActions, mapGetters } from 'vuex';
import { FETCH_TOURS } from '@/store/type/actions.js';

export default (field, fetchFieldAction) => ({
  data: () => ({
    items: [],
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
    // $route(to, from) {
    //   this.selection = [];
    //   this.getSelectionFromURL();
    // },
  },
  created() {
    // eslint-disable-next-line no-prototype-builtins
    if (this.$route.query.hasOwnProperty(field)) this.getSelectionFromURL();
  },

  methods: {
    ...mapActions([FETCH_TOURS, fetchFieldAction]),

    getFieldList() {
      if (!this[field].length) this[fetchFieldAction]();
    },

    getFilteredTours() {
      const filterObject = this.selection.length
        ? {
            ...this.$route.query,
            [field]: { all: this.selection },
          }
        : {
            ...this.$route.query,
            [field]: undefined,
            // Properties that are set to undefined will be omitted entirely by qs
          };

      this.$router.push({ query: filterObject });
    },

    removeFilterItem(removedItem, array) {
      console.log('hey', removedItem, array);
      for (let i = 0; i < array.length; i += 1) {
        // eslint-disable-next-line security/detect-object-injection
        if (array[i] === removedItem) {
          console.log('sao ko xoa');
          array.splice(i, 1);
        }
      }
    },

    getSelectionFromURL() {
      this.getFieldList();

      const selectionFromURL = this.$route.query[field].all;

      this.selection = Array.isArray(selectionFromURL)
        ? selectionFromURL
        : [selectionFromURL];
    },
  },
});
