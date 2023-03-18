<script>
import axios from 'axios';
import { onMounted } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import { defineComponent } from "vue";


export default defineComponent({
  props: ['id'],
  data() {
    myRepo:[]
  },
  mounted() {

    const repos = async () => {
  try {
    const result= await axios.get(`https://api.github.com/repositories/${this.$route.params.id}`);
    
    this.myRepo=result.data;

  } catch (error) {
    console.log(error) 
  }
}
repos()
}
});
</script>



<template>
  <div class="about">
    <div> {{ myRepo }}</div>
  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
