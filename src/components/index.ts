import Vue from "vue";
import SingleSelect from "./SingleSelect.vue";

const Components:any = {
  "fte-select": SingleSelect,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
