<template>
  <div>
    <div
      class="suggested-term"
      @click="clickSuggested(match)"
      v-for="match in matches.slice(0, 6)"
      v-html="match"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      terms: [
        "Restaurants",
        "Delivery",
        "Takeout",
        "Accountants",
        "Plumbers",
        "Auto Repair"
      ],
      filteredTerms: [],
      boldedTerms: []
    };
  },
  methods: {
    clickSuggested(term) {
      if (typeof term === "string") this.$emit("suggest", term);
      else this.$emit("suggest", term.title);
    },
    closeDrop() {
      console.log("close");
    }
  },
  computed: {
    matches() {
      if (this.selection == "") {
        return this.terms;
      } else {
        this.filteredTerms = this.suggestions.filter(str => {
          return str.toUpperCase().indexOf(this.selection.toUpperCase()) >= 0;

          //Explanation:
          /*
                it will filter the entire array and for the alias of each object if indexOf finds anything other than -1, it will return the object as part of the new array
              */
        });
        for (var i in this.filteredTerms) {
          this.filteredTerms[i] = this.filteredTerms[i].replace(
            RegExp(this.selection, "g"),
            `<b>${this.selection}</b>`
          );
          console.log(this.filteredTerms[i]);
        }
        return this.filteredTerms;
      }
    }
  },
  props: {
    suggestions: {
      type: Array
    },
    selection: {
      type: String
    }
  }
};
</script>

<style scoped>
.suggested-term {
  padding: 10px;
  font-size: 14px;
}

.suggested-term:hover {
  background-color: #0097ec;
  color: white;
  cursor: pointer;
}
</style>
