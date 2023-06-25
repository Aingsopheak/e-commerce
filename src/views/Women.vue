<template>
  <Shop :product="getWomen" :image="heroWomen" :category="category" />
</template>

<script>
import Shop from "@/components/Shop.vue";
import { mapGetters } from "vuex";

export default {
  components: { Shop },
  data() {
    return {
      heroWomen: "heroWomen.jpg",
      category: "Apple",
    };
  },
  computed: {
    ...mapGetters(["getWomen"]),
  },
};
</script>

<style></style>
