<template>
<div class="container">

    <div class="contacts">
        <div class="py-5">
            <TitleSection class="title-section"
            :dataTitle = 'dataTitle' />

            <div class="row justify-content-center">
                <ProgessBar 
                :data = 'data' 
                data-aos="fade-up" data-aos-duration="1800"/>
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
                title: this.$t('footer.title'),
                subtitle: this.$t('footer.subTitle')
            },
            data: [
                {
                    title: this.$t('footer.MindTitle'),
                    progress: '54',
                    textStart: this.$t('footer.MindElementLeft'),
                    textEnd: this.$t('footer.MindElementRight'),
                    counterBar: 0
                },
                {
                    title: this.$t('footer.EnergyTitle'),
                    progress: '66',
                    textStart: this.$t('footer.EnergyElementLeft'),
                    textEnd: this.$t('footer.EnergyElementRight'),
                    counterBar: 0
                },
                {
                    title: this.$t('footer.NatureTitle'),
                    progress: '61',
                    textStart: this.$t('footer.NatureElementLeft'),
                    textEnd: this.$t('footer.NatureElementRight'),
                    counterBar: 0
                },
                {
                    title: this.$t('footer.TacticsTitle'),
                    progress: '75',
                    textStart: this.$t('footer.TacticsElementLeft'),
                    textEnd: this.$t('footer.TacticsElementRight'),
                    counterBar: 0
                },
                {
                    title: this.$t('footer.IdentityTitle'),
                    progress: '56',
                    textStart: this.$t('footer.IdentityElementLeft'),
                    textEnd: this.$t('footer.IdentityElementRight'),
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