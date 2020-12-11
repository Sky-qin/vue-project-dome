<template>
  <div>
    <Button @click="toList">{{ title }}</Button>
    <div>{{ wall.count }}</div>
    <div v-for="item in list" v-bind:key="item.name">
      <div>
        {{ item.name }}
      </div>
      <div>{{ item.age }}</div>
    </div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import { mapGetters } from "vuex";
import API from "../services/api";

export default {
  name: "home",
  components: {
    Button,
  },
  data() {
    return {
      title: "HOME",
      list: [],
    };
  },
  props: {},
  mounted() {
    console.log("渲染home");
    this.getList();
    console.log("VUE_APP_SECRET", process.env.VUE_APP_SECRET);
  },
  computed: {
    ...mapGetters(["wall"]),
  },
  methods: {
    toList() {
      this.$store.commit("handleChangeCount", 2);
      this.$router.push({ path: "/list" });
    },
    async getList() {
      const { data } = await API.getList({ id: "test" });
      if (data.success) {
        this.list = data.data || [];
      }
    },
  },
};
</script>
