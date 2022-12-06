<template>
    <div class="container" id="projects">
        <div class="wrapper">
            <CardProject 
            v-show="project.active" 
            :projectsData = 'projectsData' 
            v-for="(project, index) in projectsData" :key="index"

            :title = 'project.title'
            :description = 'project.description'
            :img = 'project.img'
            :active = 'project.active'
            :link = 'project.link'
            />
        </div>
    </div>
</template>

<script>
import CardProject from '../Common/CardProject.vue'

export default {
    components: { CardProject },
    data: function(){
        return{
            projectsData: [
                {
                    id: 0,
                    title: 'Garagefinder',
                    description: this.$t('Projects.ProjectDescriptionOne'),
                    img: 'Garagefinder.png',
                    active: true,
                    link: ''
                },
                {
                    id: 1,
                    title: 'Avada Charity',
                    description: this.$t('Projects.ProjectDescriptionTwo'),
                    img: 'AvadaCharity.jpg',
                    active: false,
                    link: ''
                },
                {
                    id: 2,
                    title: 'Boolflix',
                    description: this.$t('Projects.ProjectDescriptionThree'),
                    img: 'Boolflix.jpg',
                    active: false,
                    link: ''
                },
                {
                    id: 3,
                    title: 'Boolzap',
                    description: this.$t('Projects.ProjectDescriptionFour'),
                    img: 'Boolzap.jpg',
                    active: false,
                    link: ''
                }
            ]
        }
    }

}
</script>

<style scoped lang="scss">


.wrapper{
    height: 100%;
    padding: 10rem 0;
}

</style>