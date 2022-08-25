<template>
  <v-header />
  <el-main> 
    <router-view />
  </el-main>
</template>

<script >
import vHeader from "@/components/Header.vue";
export default {
  name: "vm",
  components: {
    vHeader,
  },
};
</script>



