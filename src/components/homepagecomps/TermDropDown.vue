<template>
  <div>
    <div
      class="suggested-term"
      @click="clickSuggested(matches.indexOf(match))"
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
        "Auto Repair",
      ],
      filteredTerms: [],
      noBoldTerms: [],
    };
  },
  methods: {
    clickSuggested(index) {
      if (this.selection != "") this.$emit("suggest", this.noBoldTerms[index]);
      else this.$emit("suggest", this.terms[index]);
    },
    closeDrop() {
      console.log("close");
    },
  },
  computed: {
    matches() {
      if (this.selection == "") {
        return this.terms;
      } else {
        this.filteredTerms = this.suggestions.filter((str) => {
          return str.toUpperCase().indexOf(this.selection.toUpperCase()) >= 0;
        });
        this.noBoldTerms = this.suggestions.filter((str) => {
          return str.toUpperCase().indexOf(this.selection.toUpperCase()) >= 0;
        });
        for (var i in this.filteredTerms) {
          this.filteredTerms[i] = this.filteredTerms[i].replace(
            RegExp("(" + this.selection + ")", "gi"),
            `<b>$1</b>`
            //Case insensitive replacement
          );
        }
        return this.filteredTerms;
      }
    },
  },
  props: {
    suggestions: {
      type: Array,
    },
    selection: {
      type: String,
    },
  },
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
