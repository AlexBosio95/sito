<template>
    <div class="about-me" id="about-me">
        <div class="mb-5">

            <TitleSection class="title-section"
            :dataTitle = 'dataTitle'/>

            <div class="row row-cols-1 row-cols-md-2">

                <div class="col d-flex justify-content-center align-items-center">
                    <BoxImage data-aos="fade-right" data-aos-duration="1500"/>
                </div>

                <div class="col">
                    <div class="box-container">
                        <BoxInfo v-for="(data, index) in dataBox" :key="index"
                            :title = 'data.title'
                            :logo = 'data.logo'
                            :data=  "data.data"
                            :myGit = 'myGit'

                            data-aos="fade-left" data-aos-duration="1500"
                        />

                        <Paragraf
                            :dataParagraf = 'dataParagraf'
                            data-aos="fade-up" data-aos-duration="800"/>

                        <SquareButton v-for="button in ButtonData" :key="button.id"
                            :text= 'button.text'
                            :type= 'button.type'
                            :url= 'button.url'

                            data-aos="fade-up" data-aos-duration="800"
                        />
                </div>
            </div>
        </div>      
    </div>


        
    </div>
</template>

<script>
import SquareButton from '../Common/SquareButton.vue'
import BoxInfo from '../Common/BoxInfo.vue'
import TitleSection from '../Common/TitleSection.vue'
import BoxImage from './BoxImage.vue'
import Paragraf from '../Common/Paragraf.vue'

export default {
    components: { BoxInfo, SquareButton, TitleSection, BoxImage, Paragraf },
    data: function(){
        return{
            dataBox:[
                {
                    title: this.$t('aboutMe.BoxOneTitle'),
                    logo: 'fa-solid fa-briefcase',
                    data: this.$t('aboutMe.BoxOneData')
                },
                {
                    title: this.$t('aboutMe.BoxTwoTitle'),
                    logo: 'fa-solid fa-bars-progress',
                    data: this.$t('aboutMe.BoxTwoData')
                },
                {
                    title: this.$t('aboutMe.BoxThreeTitle'),
                    logo: 'fa-solid fa-book',
                    data: this.$t('aboutMe.BoxThreeData')
                }
            ],
            
            ButtonData: [ 
                {
                id: 3,
                text: this.$t('aboutMe.ButtonText'),
                type: 'fill',
                url: '#skill',
                }
            ],

            dataTitle:{
                title: this.$t('aboutMe.title'),
                subtitle: this.$t('aboutMe.subTitle')
            },

            dataParagraf: this.$t('aboutMe.dataParagraf')

        }
    },

    props:{
        myGit: Object,
    }

}
</script>


<style lang="scss" scoped>

@import '@/style/variables.scss';

    .about-me{
        overflow: hidden;
        height: 100%;
        padding-top: 4rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        .title-section{
            text-align: center;
            margin-bottom: 2rem;
        }

        .box-container{
            padding-top: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;

        }
    }


    @media all and (min-width: 992px) {
        .about-me{
            padding-top: 0rem;
            height: 100vh;

            .title-section{
                margin-bottom: 4rem;
            }

            .box-container{
                justify-content: start;
                width: 80%;
                padding-top: 0rem;

                p{
                    text-align: left;
                }
            }
    }


    }

</style>