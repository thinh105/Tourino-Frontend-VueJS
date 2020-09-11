const isSelectionEqualUrlQuery = (selection, urlQuery) =>
  JSON.stringify(selection) === JSON.stringify(urlQuery);

export default function (field) {
  return {
    data: () => ({
      selection: [],
    }),

    watch: {
      selection() {
        this.setUrlFromSelection();
      },

      // Watch the route changed when using Back/Foward in browser
      async $route(to, from) {
        await this.setSelectionFromURL();
      },
    },

    async created() {
      await this.setSelectionFromURL();
    },

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
          filterObject.price.includes(1000)
        ) {
          delete filterObject.price;
        }

        console.log(field, 'visit Link');

        this.$router.push({ path: 'tours', query: filterObject });
        // .catch(() => {});
      },

      async setSelectionFromURL() {
        if (!this.$route.query[field]) {
          // clean selection when use back/foward in browser
          // to another URL not contains this field
          this.selection = undefined;
          return;
        }

        if (isSelectionEqualUrlQuery(this.selection, this.$route.query[field]))
          return;

        if (typeof this.getOptionList === 'function')
          await this.getOptionList();

        this.selection = [...this.$route.query[field]]; // The route object is immutable
      },
    },
  };
}
