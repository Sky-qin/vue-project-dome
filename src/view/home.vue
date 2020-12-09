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
  data() {
    return {
      title: "HOME",
    };
  },
  props: {},
  mounted() {
    console.log("渲染home");
  },
  computed: {
    ...mapGetters(["wall"]),
  },
  methods: {
    toList() {
      this.$store.commit("handleChangeCount", 2);
      this.$router.push({ path: "/list" });
    },
  },
};
</script>
