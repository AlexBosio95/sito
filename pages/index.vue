<template>
  <div>
      <Header />
      <Main 
      :myGit = 'myGit'
      :myGitRepo = 'myGitRepo'/>
      <Footer />
  </div>
</template>

<script>

import Header from '~/components/Header/Header.vue'
import Main from '~/components/Main/Main.vue'
import Footer from '~/components/Footer/Footer.vue'

import axios from 'axios';

export default {
  name: 'IndexPage',
  components: { Footer, Header, Main },

  
  data: function(){
    return{
      myGit: {},
      myGitRepo: []

    }
  },
  methods: {
    getMyGithub(){
      axios.get('https://api.github.com/users/AlexBosio95')
      .then((results) => {
        this.myGit = results.data
      })
    },
    getGitRepo(){
      axios.get('https://api.github.com/users/AlexBosio95/repos')
      .then((results) => {
        this.myGitRepo = results.data
      })

    }
  },
  created(){
    this.getMyGithub()
    this.getGitRepo()
  }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

body{
  background-color: $GrayStrong;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

html{
  scroll-behavior: smooth;
}

</style>