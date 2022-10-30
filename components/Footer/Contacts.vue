<template>
<div class="container">

    <div class="contacts">
        <div class="py-5">
            <TitleSection v-scrollanimation class="title-section"
            :dataTitle = 'dataTitle' />

            <div class="row justify-content-center">
                    <ProgessBar v-scrollanimation 
                    :data = 'data' />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProgessBar from '../Common/ProgessBar.vue'
import TitleSection from '../Common/TitleSection.vue'

export default {
    components: { TitleSection, ProgessBar },
    data: function(){
        return{
            dataTitle:{
                title: 'I\'m a Supporter',
                subtitle: 'My personality'
            },
            data: [
                {
                    title: 'Mind',
                    progress: '54',
                    textStart: 'Introverted',
                    textEnd: 'Extraverted',
                    counterBar: 0
                },
                {
                    title: 'Energy',
                    progress: '66',
                    textStart: 'Intuitive',
                    textEnd: 'Observant',
                    counterBar: 0
                },
                {
                    title: 'Nature',
                    progress: '61',
                    textStart: 'Feeling',
                    textEnd: 'Thinking',
                    counterBar: 0
                },
                {
                    title: 'Tactics',
                    progress: '75',
                    textStart: 'Judging',
                    textEnd: 'Prospecting',
                    counterBar: 0
                },
                {
                    title: 'Identity',
                    progress: '56',
                    textStart: 'Assertive',
                    textEnd: 'Turbulent',
                    counterBar: 0
                }
            ]
        }
        
    }

}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

.contacts{
    height: 100%;

    .title-section{
        text-align: center;
        margin-bottom: 2rem;
    }

}

    @media all and (min-width: 992px) {
        .contacts{
            height: 100vh;

            .title-section{
                margin-bottom: 4rem;
            }
        }

    }


</style>