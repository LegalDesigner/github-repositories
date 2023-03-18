<h1>{{ repository.name }}</h1>
<p>{{ repository.description }}</p>
<p>Language: {{ repository.language }}</p>
<p>URL: <a :href="repository.html_url">{{ repository.html_url }}</a></p>
</div>
</template>

<script>
export default {
data() {
return {
  repository: {}
};
},
async created() {
const { repoName } = this.$route.params;
const response = await fetch(`https://api.github.com/repos/LegalDesigner/${repoName}`);
if (response.status === 404) {
  this.$router.push("/404");
} else {
  this.repository = await response.json();
}
}
};
</script>

<style>
/* Add styles for the repository page here */
</style>
