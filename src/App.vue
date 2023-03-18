<template>
  <div class="home">
    <nav>
      <img src="/logo.png" alt="Logo">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/repositories">Repositories</router-link></li>
      </ul>
    </nav>
    <header>
      <h1>My Final Examination</h1>
    </header>
    <div class="about-me-container">
      <div class="about-me">
        <h2>About Me</h2>
        <p>Hello, my name is [Your Name] and I am a frontend developer. I am passionate about creating beautiful 
          and functional websites and applications that provide great user experiences. My journey to becoming a 
          frontend developer began when I was studying [Your degree/field of study] in college. I became interested
           in web design and started learning HTML, CSS and JavaScript on my own. I was fascinated by the ability to 
           create something visually appealing and functional with code. Overall, I am passionate about frontend development and look forward to continuing to grow my skills and knowledge in this field.</p>
        <router-link to="/repositories">My Repositories</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      pageTitle: 'My Final Examination Project',
      aboutMe: 'Write anything that has to do with passion to be a developer'
    };
  }
};
</script>