
<template>
  <div class="about">
    <!-- <v-header /> -->
    <div class="box">
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    vHeader,
  },
  setup(){
    const user = {uid:2072,nickname:'管理员'}
    localStorage.setItem('user',JSON.stringify(user))

    user = JSON.parse(localStorage.getItem('user'))
  }
};
</script>

<style scoped>
  .box{
    margin: 10px;
  }
</style>
