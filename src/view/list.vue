<template>
  <div>
    <Button @click="toHome">去详情</Button>
    <div>{{ wall.count }}</div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import { mapGetters } from "vuex";

export default {
  name: "list",
  components: {
    Button,
  },
  computed: {
    ...mapGetters(["wall"]),
  },
  data() {
    return {
      title: "我是首页",
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    console.log("渲染了列表");
  },
  methods: {
    toHome() {
      this.$store.commit("handleChangeCount", 3);
      this.$router.push({ path: "/detail" });
    },
  },
};
</script>
