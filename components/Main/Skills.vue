<template>
<div class="skills">
    <TitleSection class="bigTitle"
    :dataTitle= 'dataTitle' 
    />

    <div class="container">
        <div class="row row-cols-1 row-cols-md-2">

            <BoxCard
            :dataCard = 'arrayFront'
            :dataBoxCard = 'dataFCard'/>

            <BoxCard
            :dataCard = 'arrayBack'
            :dataBoxCard = 'dataBCard'/>

        </div>
    </div>
</div>
</template>

<script>
import BoxCard from '../Common/BoxCard.vue'
import TitleSection from '../Common/TitleSection.vue'

export default {
    components: { TitleSection, BoxCard },
    data: function(){
        return{
            dataCard: [
                {
                    id: 0,
                    title: 'PHP',
                    type: 'Language',
                    imgUrl: 'fa-brands fa-php',
                    group: 'Backend'
                },

                {
                    id: 1,
                    title: 'JavaScript',
                    type: 'Language',
                    imgUrl: 'fa-brands fa-js',
                    group: 'Frontend'
                },

                {
                    id: 2,
                    title: 'HTML',
                    type: 'Language',
                    imgUrl: 'fa-brands fa-html5',
                    group: 'Frontend'
                },

                {
                    id: 3,
                    title: 'CSS',
                    type: 'Language',
                    imgUrl: 'fa-brands fa-css3-alt',
                    group: 'Frontend'
                },

                {
                    id: 4,
                    title: 'MySQL',
                    type: 'Language',
                    imgUrl: 'fa-solid fa-database',
                    group: 'Backend'
                },

                {
                    id: 5,
                    title: 'Scss',
                    type: 'Language',
                    imgUrl: 'fa-brands fa-sass',
                    group: 'Frontend'
                },

                {
                    id: 6,
                    title: 'Vue',
                    type: 'Framework',
                    imgUrl: 'fa-brands fa-vuejs',
                    group: 'Frontend'
                },

                {
                    id: 7,
                    title: 'Laravel',
                    type: 'Framework',
                    imgUrl: 'fa-brands fa-laravel',
                    group: 'Backend'
                },

                {
                    id: 8,
                    title: 'Bootstrap',
                    type: 'Library',
                    imgUrl: 'fa-brands fa-bootstrap',
                    group: 'Frontend'
                },

                {
                    id: 9,
                    title: 'Docker',
                    type: 'Software',
                    imgUrl: 'fa-brands fa-docker',
                    group: 'Backend'
                },
                {
                    id: 10,
                    title: 'PHPStorm',
                    type: 'IDE',
                    imgUrl: 'fa-solid fa-rocket',
                    group: 'Backend'
                },
                {
                    id: 11,
                    title: 'Golang',
                    type: 'Language',
                    imgUrl: 'fa-brands fa-golang',
                    group: 'Backend'
                },
                {
                    id: 11,
                    title: 'Github',
                    type: 'Software',
                    imgUrl: 'fa-brands fa-github',
                    group: 'Backend'
                },
            ],
            dataTitle:{
                title: this.$t('skills.title'),
                subtitle: this.$t('skills.subTitle'),
            },

            dataFCard: 'Frontend',
            dataBCard: 'Backend',

            arrayFront: [],
            arrayBack: []
        }
    },
    methods:{
        getArrayGroup(){
            this.dataCard.forEach(element => {
                if (element.group != null || element.group != '') {
                    
                    if (element.group == 'Frontend') {
                        this.arrayFront.push(element)
                    } else {
                        this.arrayBack.push(element)
                    }
                }
            });
        }
    },
    created(){
        this.getArrayGroup()
    }

}
</script>

<style scoped lang="scss">

    .skills{
        height: 100%;

        .bigTitle{
            text-align: center;
            padding: 3rem 0 0 0;
        }

    }

    @media all and (min-width: 992px) {

    .skills{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .bigTitle{
            width: 100%;
            padding: 3rem 0;
        }

    }

    }


</style>