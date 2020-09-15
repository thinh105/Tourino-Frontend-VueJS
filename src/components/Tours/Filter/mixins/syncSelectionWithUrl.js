const isSelectionEqualUrlQuery = (selection, urlQuery) =>
  JSON.stringify(selection) === JSON.stringify(urlQuery);

export default function (field) {
  return {
    data: () => ({
      selection: undefined,
      initialSelection: undefined,
    }),

    watch: {
      selection() {
        this.setUrlFromSelection();
      },

      // Watch the route changed when using Back/Foward in browser
      // async $route(to, from) {
      //   await this.setSelectionFromUrl();
      // },

      $route: {
        handler: 'setSelectionFromUrl',
        immediate: true,
      },
    },

    // async created() {
    //   await this.setSelectionFromUrl();
    // },

    methods: {
      setUrlFromSelection() {
        if (isSelectionEqualUrlQuery(this.selection, this.$route.query[field]))
          return;

        const filterObject = { ...this.$route.query }; // The route object is immutable

        if (this.selection && this.selection.length > 0) {
          filterObject[field] = this.selection;
        } else {
          delete filterObject[field];
        }

        if (
          field === 'price' &&
          filterObject.price &&
          filterObject.price.includes(0) &&
          filterObject.price.includes(1050)
        ) {
          delete filterObject.price;
          return;
        }

        this.$router.push({ path: 'tours', query: filterObject });
        // .catch(() => {});
      },

      async setSelectionFromUrl() {
        console.log('tour Query nay', this.$route.query);
        if (!this.$route.query[field]) {
          // clean selection when use back/foward in browser
          // to another Url not contains this field
          // but selection still have value

          this.selection = this.selection ? this.initialSelection : undefined;

          return;
        }

        if (
          isSelectionEqualUrlQuery(this.selection, this.$route.query[field])
        ) {
          return;
        }

        if (typeof this.getOptionList === 'function')
          await this.getOptionList(); // from ./getPredefinedOption.js

        this.selection = [...this.$route.query[field]]; // The route object is immutable
      },
    },
  };
}
