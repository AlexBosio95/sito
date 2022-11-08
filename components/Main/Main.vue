<template>
<main>

    <AboutMe 
    :myGit = 'myGit'/>

    <Skills id="skill"/>

</main>
</template>

<script>
import Skills from './Skills.vue';
import AboutMe from './AboutMe.vue';

export default {

    components:{
        Skills,
        AboutMe,
    },
    props:{
        myGit: Object,
        myGitRepo: Array,
    }, 
    
}

</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

main{
    color: $White;
    width: 100%;
    background-color: $GrayStrong;
    overflow-x: hidden;
    overflow-y: hidden;
}

</style>