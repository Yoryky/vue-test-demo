<template>
  <div class="top-div">
    <ul class="dialog-ul">
      <li v-for="(item, index) in items" :key="index">
        {{ item }} - {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from "../../src/utils/EventBus";

export default {
  name: "CustomDialog",
  mounted() {
    EventBus.$on('change-item', arg => {
      switch (arg) {
        case 'add':
          this.items.push('item' + this.items.length)
          break
        case 'delete':
          this.items.pop()
          break
        case 'filter': {
          const filterChar = 'yjing'
          const filterItems = this.items.filter(item=>{
            return item.indexOf(filterChar) != -1
          })
          this.items = filterItems
          break
        }
      }
    })
  },
  data() {
    return {
      items: ['yjing', 'zhangcai', 'yangzile'],
    }
  },
  props: {}
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
