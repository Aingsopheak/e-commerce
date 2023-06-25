<template>
<Shop :product="getMen" :image="heroMen" :category="category" />
</template>

<script>
import Shop from "@/components/Shop.vue";
import { mapGetters } from "vuex";


export default {
  components: { Shop },
  data() {
    return {
      heroMen: "heroMen.jpg",
      category: "Samsung",
    };
  },
  computed: {
    ...mapGetters(["getMen"]),
  },
};
</script>

<style>
</style>
