<template>
  <div class="top-div">
    <ul class="dialog-ul">
      <li v-for="(item, index) in filterItems" :key="index">
        {{ item }} - {{ index }}
      </li>
    </ul>
    <h4>{{ lastItem }}</h4>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "VuexCustomDialog",
  mounted() {

  },
  data() {
    return {
      lastItem: '',
    }
  },
  props: {},
  computed: {
    ...mapState(["items", "filterValue"]),
    filterItems() {
      return this.items.filter(item => {
        return item.indexOf(this.filterValue) != -1
      })
    }
  },
  watch: {
    items: function (newItems, oldItems) {
      this.lastItem = newItems[newItems.length - 1]
      console.log(`newItems length == ${newItems.length}  oldItems length === ${oldItems.length}`)
    },
  }
}
</script>

<style scoped>
.top-div {
  background: #42b983;
  padding: 0 5px;
  width: 100px;
  text-align: center;
  overflow-y: scroll;
  max-height: 200px;
  position: absolute;
  left: 50px;
  top: 200px;
  z-index: 1000;
}

.dialog-ul {
  padding: 0px;
}

.dialog-ul li {
  display: flex;
}


</style>
