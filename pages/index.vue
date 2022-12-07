<template>
  <div @scroll.passive="isOpen = false">
      <div v-if="isLoading">
        <LoadingView />
      </div>
      <div v-else>
        <Menu :isOpen = 'isOpen' @update:open='isOpen = $event'/>
        <Header  />
        <Main
        :myGit = 'myGit'
        :myGitRepo = 'myGitRepo'/>
        <Footer />
      </div>
  </div>
</template>

<script>

import Header from '~/components/Header/Header.vue'
import Main from '~/components/Main/Main.vue'
import Footer from '~/components/Footer/Footer.vue'
import Menu from '~/components/Common/Menu.vue'
import axios from 'axios';

export default {
  name: 'IndexPage',
  components: { Footer, Header, Main, Menu },
  
  data: function(){
    return{
      myGit: {},
      myGitRepo: [],
      isOpen: false,
      isLoading: true

    }
  },
  methods: {
    getMyGithub(){
      axios.get('https://api.github.com/users/AlexBosio95')
      .then((results) => {
        this.myGit = results.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    changeOpen(){
      this.isOpen = false
    }
    
  },
  created(){
    this.getMyGithub()
  },
  mounted(){
      window.addEventListener('scroll', this.changeOpen);

      setTimeout(() => {
        this.isLoading = false
      }, 5000);

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