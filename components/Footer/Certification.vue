<template>
    <div class="container">
        <div class="contacts">
            <div class="padding-container">
                <TitleSection class="title-section"
                :dataTitle = 'dataTitle' />
            </div>
            <div class="row justify-content-center mp">
                <CertificationCard data-aos="zoom-out" data-aos-duration="1800"/>
            </div>
            <div class="powered">
                <span>Powered by Alex Bosio</span>
            </div>
        </div>
    </div>
</template>

<script>
import CertificationCard from '../Common/CertificationCard.vue'
import TitleSection from '../Common/TitleSection.vue'
export default {
    components: {TitleSection, CertificationCard},
    data: function(){
        CertificationCard
        return{
            dataTitle:{
                title: this.$t('footer.title'),
                subtitle: this.$t('footer.subTitle')
            },
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
        margin-bottom: 1rem;
        padding-top: 4rem;
    }

    .padding-container{
        padding-bottom: 4rem;
    }
}

.powered{
    text-align: left;
    color: $Graylight;
    padding-bottom: 2rem;
}

@media all and (max-width: 992px) {
        .powered{
            text-align: right;
            width: 90%;
        }
    }

</style>
