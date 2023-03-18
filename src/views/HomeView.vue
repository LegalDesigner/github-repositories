<script>
import axios from 'axios';
import { onMounted } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import { defineComponent } from "vue";


export default defineComponent({
  data() {
    myRepos:[]
  },
  mounted() {
  


  // axios.get('https://github.com/LegalDesigner?tab=repositories')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });


  const repos = async () => {
    try {
      const username = "LegalDesigner"
      const result= await axios.get(`https://api.github.com/users/${username}/repos`);
      console.log(result.data);
      this.myRepos= result.data;

    } catch (error) {
      console.log(error) 
    }
  }
  repos();
}
});
</script>



<template>
  <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(repo,index) in myRepos" :key="index">
      <th scope="row">{{ index+1 }}</th>
      <td>{{ repo.name }}</td>
      <td>{{ repo.private?"private":"public" }}</td>
      <td> <router-link :to="`/about/${repo.id}`"><button class="btn btn-light">Open</button></router-link></td>
    </tr>
    
  </tbody>
</table>


</template>

<style scoped>
.tableStyle {
  margin: 20px 40px 0px 40px;
}
</style>
