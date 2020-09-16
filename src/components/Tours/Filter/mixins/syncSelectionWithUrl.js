import isEqual from '../ultils/doArraysHasSameElements';

export default function (field) {
  return {
    data: () => ({
      selection: undefined,
    }),

    watch: {
      selection: 'setUrlFromSelection',

      // Watch the route changed when using Back/Foward in browser
      $route: {
        handler: 'setSelectionFromUrl',
        immediate: true, // run that above function in the create hook
      },
    },

    methods: {
      setUrlFromSelection() {
        // avoid deadlock after set selection based on URL
        if (this.isDeadlock()) return;

        const routeQueryClone = { ...this.$route.query };
        const filterQuery = this.setFilterQuery(routeQueryClone);

        this.$router.push({ path: 'tours', query: filterQuery });
        // .catch(() => {});
      },

      isDeadlock() {
        return isEqual(this.selection, this.$route.query[field]);
      },

      setFilterQuery(filterQuery) {
        if (this.selection && this.selection.length > 0) {
          filterQuery[field] = this.selection;
        } else {
          // clean URL query when use back/foward in browser
          delete filterQuery[field];
        }
        return filterQuery;
      },

      async setSelectionFromUrl() {
        // avoid deadlock after set URL based on selection
        if (this.isDeadlock()) return;

        // clean selection when use back/foward in browser
        // to another Url not contains this field
        // but selection still have value
        if (!this.$route.query[field]) {
          this.selection = this.defaultSelection;
          return;
        }

        // get Option List from API | from ./getPredefinedOption.js
        if (typeof this.getOptionList === 'function')
          await this.getOptionList();

        this.selection = [...this.$route.query[field]]; // The route object is immutable
      },
    },
  };
}
