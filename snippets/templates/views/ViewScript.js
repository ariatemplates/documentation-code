Aria.classDefinition({
  $classpath: "snippets.templates.view.Viewscript",
  $prototype: {
    ////#initView
    initView : function() {
      this.vHotels.setSort(this.vHotels.SORT_ASCENDING, "sortByPrice", function(o) {
        return o.value.price;
      });
    },
    ////#initView

    priceLowerThan200: function() {
      ////#filterIn
      this.vHotels.filterIn(this.vHotels.FILTER_SET, function(o) {
        return (o.value.price < 200);
      });
      ////#filterIn
    },

    addLuxuryFilter: function() {
      ////#filterAddElement
      this.vHotels.filterIn(this.vHotels.FILTER_ADD, function(o) {
        return (o.value.stars >= 5);
      });
      ////#filterAddElement
    },

    removeNotLuxuryFilter: function() {
      ////#filterRemoveElement
      this.vHotels.filterIn(this.vHotels.FILTER_REMOVE, function(o) {
        return (o.value.stars > 2);
      });
      ////#filterRemoveElement
    },

    setSortAscending: function() {
      ////#ascSortOder
      this.vHotels.sortOrder = this.vHotels.SORT_DESCENDING;
      ////#ascSortOder
    },

    toggleSortOrder: function() {
      ////#toogleSortOder
      this.vHotels.toggleSortOrder("sortByPrice", function(o) {
        return o.value.price;
      });
      ////#toogleSortOder
    },

    sortByPrice: function() {
      ////#sortByPrice
      this.vHotels.setSort(this.vHotels.SORT_ASCENDING, "sortByPrice", function(o) {
        return o.value.price;
      });
      ////#sortByPrice
    },

    setPageNumber: function() {
      ////#pageNumber
      this.vHotels.setPageSize(3);
      ////#pageNumber
    },

    nextPage: function() {
      ////#nextPage
      this.vHotels.currentPageIndex++;
      ////#nextPage
    }
  }
});