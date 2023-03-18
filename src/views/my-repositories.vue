<template>
    <div class="repositories">
      <nav>
        <img src="/logo.png" alt="Logo">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/repositories">Repositories</router-link></li>
        </ul>
      </nav>
      <h1>Repositories</h1>
      <ul>
        <li v-for="repo in repositories" :key="repo.id">
          <router-link :to="'/repositories/' + repo.name">{{ repo.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        repositories: []
      };
    },
    async created() {
      const response = await fetch("https://api.github.com/users/LegalDesigner/repos");
      this.repositories = await response.json();
    }
  };
  </script>
  
  <style>
    /* Add styles for the repositories page here */
  </style>
  