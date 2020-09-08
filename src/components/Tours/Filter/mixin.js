import { mapActions, mapGetters } from 'vuex';
import { FETCH_TOURS } from '@/store/type/actions.js';

export default function (field, fetchFieldAction) {
  return {
    data: () => ({
      items: [],
      search: null,
      selection: [],
      isFieldLoading: false,
      stopWatcher: false,
    }),

    computed: {
      ...mapGetters([field]),
    },

    watch: {
      selection() {
        if (this.stopWatcher) {
          this.stopWatcher = false;
        } else {
          this.visitFilteredLink();
        }
      },

      async $route(to, from) {
        await this.setSelectionFromURL();
      },
    },

    async created() {
      await this.setSelectionFromURL();
    },

    methods: {
      ...mapActions([FETCH_TOURS, fetchFieldAction]),

      async getFieldList() {
        if (!this[field].length) {
          this.isFieldLoading = true;
          await this[fetchFieldAction]();
          this.isFieldLoading = false;
        }
      },

      visitFilteredLink() {
        /*       const filterObject = this.selection.length
        ? {
            ...this.$route.query,
            [field]: this.selection,
          }
        : {
            ...this.$route.query,
            [field]: undefined,
            // Properties that are set to undefined will be omitted entirely by qs
          }; */

        const filterObject = { ...this.$route.query };

        if (this.selection.length > 0) {
          filterObject[field] = this.selection;
        } else {
          delete filterObject[field];
        }
        console.log(this.selection);

        this.$router.push({ path: 'tours', query: filterObject });
      },

      removeFilterItem(removedItem, array) {
        for (let i = 0; i < array.length; i += 1) {
          // eslint-disable-next-line security/detect-object-injection
          if (array[i] === removedItem) {
            array.splice(i, 1);
          }
        }
      },

      async setSelectionFromURL() {
        this.stopWatcher = true;
        if (
          this.$route.query.hasOwnProperty(field) &&
          this.$route.query[field]
        ) {
          await this.getFieldList();

          const selectionFromURL = this.$route.query[field];

          this.selection = Array.isArray(selectionFromURL)
            ? [...selectionFromURL] // The route object is immutable - shallow copy is ok
            : [selectionFromURL];
        } else this.selection = [];
      },
    },
  };
}
