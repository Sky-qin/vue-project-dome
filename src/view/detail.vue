<template>
  <div>
    <Button @click="toList">{{ title }}</Button>
    <div>{{ wall.count }}</div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    Button,
  },
  computed: {
    ...mapGetters(["wall"]),
  },
  data() {
    return {
      title: "Detail",
    };
  },
  props: {},
  mounted() {
    console.log("渲染LIST");
  },
  methods: {
    toList() {
      console.log("点击按钮");
      this.$store.commit("handleChangeCount", "home");
      this.$router.push({ path: "/" });
    },
  },
};
</script>
