import isEqual from '../ultils/isEqual';

export function multipleSelection(field) {
  return {
    methods: {
      setSelection() {
        this.selection = [...this.$route.query[field]]; // The route object is immutable
      },
      hasSelectionValue() {
        return this.selection && this.selection.length > 0;
      },
    },
  };
}

export function singleSelection(field) {
  return {
    methods: {
      setSelection() {
        this.selection = this.$route.query[field];
      },

      hasSelectionValue() {
        return !!this.selection;
      },
    },
  };
}

export function defaultSelection(field) {
  // if selection is equal to the default, we clear it on the URL
  return {
    methods: {
      isSynced() {
        return (
          isEqual(this.selection, this.$route.query[field]) ||
          (!this.hasSelectionValue() && !this.$route.query[field])
        );
      },

      hasSelectionValue() {
        return !isEqual(this.selection, this.defaultSelection);
      },

      clearSelection() {
        if (this.hasSelectionValue()) this.selection = this.defaultSelection;
      },
    },
  };
}
