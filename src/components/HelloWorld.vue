<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
             rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank"
             rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank"
             rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank"
             rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <ul>
      <li @click="showDialog">show dialog</li>
      <li @click="hideDialog">hide dialog</li>
      <li @click="addItem">add item</li>
      <li @click="deleteItem">delete item</li>
    </ul>
    <ul>
      <li @click="showVuexDialog">show vuex dialog</li>
      <li @click="hideVuexDialog">hide vuex dialog</li>
      <li @click="addVuexItem">add vuex item</li>
      <li @click="deleteVuexItem">delete vuex item</li>
    </ul>
    <textarea style="height: 50px;width: 300px" @keydown="onKeyDown($event)"/>
    <CustomDialog v-if="isDialogVisible"/>
    <VuexCustomDialog v-if="isVuexDialogVisible"/>
  </div>
</template>

<script lang="ts">

import CustomDialog from '@/components/CustomDialog.vue';
import EventBus from '@/utils/EventBus';
import VuexCustomDialog from '@/components/VuexCustomDialog.vue';
import {mapMutations, mapState} from 'vuex';

export default {
  name: 'HelloWorld',
  computed: {

    ...mapState(['items']),
  },
  data() {
    return {
      isDialogVisible: false,
      isVuexDialogVisible: false,
    };
  },
  components: {
    VuexCustomDialog,
    CustomDialog
  },
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(["addCustomItem","deleteCustomItem","setCustomFilterValue"]),
    showDialog() {
      this.isDialogVisible = true;
    }
    ,
    hideDialog() {
      this.isDialogVisible = false;
    }
    ,
    addItem() {
      EventBus.$emit('change-item', 'add');
    }
    ,
    deleteItem() {
      EventBus.$emit('change-item', 'delete');
    }
    ,
    onKeyDown(event) {
      console.log(event);
      EventBus.$emit('change-item', 'filter');
      this.setCustomFilterValue('y')
    }
    ,
    showVuexDialog() {
      this.isVuexDialogVisible = true;
    }
    ,
    hideVuexDialog() {
      this.isVuexDialogVisible = false;
    }
    ,
    addVuexItem() {
      const item = `item-${this.items.length}`;
      this.addCustomItem(item);
    }
    ,
    deleteVuexItem() {
      this.deleteCustomItem();
    },
  },
}
;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  background: #eee;
  padding: 5px;
}

a {
  color: #42b983;
}
</style>
