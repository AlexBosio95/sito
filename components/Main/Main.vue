<template>
<main>

    <AboutMe 
    :myGit = 'myGit'/>

    <Skills id="skill"/>

    <Projects />

</main>
</template>

<script>
import Skills from './Skills.vue';
import AboutMe from './AboutMe.vue';
import Projects from './Projects.vue';

export default {

    components:{
        Skills,
        AboutMe,
        Projects,
    },
    props:{
        myGit: Object,
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