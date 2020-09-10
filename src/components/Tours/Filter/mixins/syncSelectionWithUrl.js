export default function (field) {
  return {
    data: () => ({
      selection: [],
      stopWatcher: false,
    }),
    watch: {
      selection() {
        if (this.stopWatcher) {
          this.stopWatcher = false;
        } else {
          this.visitFilteredLink();
        }
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
      visitFilteredLink() {
        const filterObject = { ...this.$route.query }; // The route object is immutable

        if (this.selection.length > 0) {
          filterObject[field] = this.selection;
        } else {
          delete filterObject[field];
        }

        if (
          field === 'price' &&
          filterObject.price.includes(0) &&
          filterObject.price.includes(1000)
        )
          delete filterObject.price;

        this.$router.push({ path: 'tours', query: filterObject });
      },

      async setSelectionFromURL() {
        this.stopWatcher = true;
        if (
          // ESlint - Disallow use of Object.prototypes builtins directly
          // this.$route.query.hasOwnProperty(field)
          Object.prototype.hasOwnProperty.call(this.$route.query, field)
          // &&
          // this.$route.query[field]
        ) {
          if (typeof this.getOptionList === 'function')
            await this.getOptionList();

          const selectionFromURL = this.$route.query[field];

          this.selection = Array.isArray(selectionFromURL)
            ? [...selectionFromURL] // The route object is immutable
            : [selectionFromURL];
        } else {
          // this.selection = this.$options.data.selection;

          // console.log(this.$options.data);
          // if (field === 'price') this.resetData();

          // this.selection = field === 'price' ? undefined : [];
          this.selection = undefined;
        }
        // this.resetData();
        // clean selection when use back/foward in browser
      },
    },
  };
}
