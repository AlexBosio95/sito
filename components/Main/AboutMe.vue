<template>
    <div class="about-me" id="about-me">
        <div class="mb-5">

            <TitleSection class="title-section"
            :dataTitle = 'dataTitle'/>

            <div class="row row-cols-1 row-cols-md-2">
                <div class="col d-flex justify-content-center align-items-center">
                    <BoxImage/>
                </div>

                <div class="col">
                    <div class="box-container">

                        <BoxInfo v-for="(data, index) in dataBox" :key="index"
                            :title = 'data.title'
                            :logo = 'data.logo'
                            :data=  "data.data"
                            :myGit = 'myGit'
                        />

                        <Paragraf
                            :dataParagraf = 'dataParagraf'/>

                        <SquareButton v-for="button in ButtonData" :key="button.id"
                            :text= 'button.text'
                            :type= 'button.type'
                            :url= 'button.url'
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
        height: 100%;
        padding-top: 2rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        .title-section{
            text-align: center;
            margin-bottom: 2rem;
        }

        .box-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;


        }
    }


    @media all and (min-width: 992px) {
        .about-me{
            height: 100vh;
            padding-top: 0rem;

            .title-section{
                margin-bottom: 4rem;
            }

            .box-container{
                justify-content: start;
                width: 80%;

                p{
                    text-align: left;
                }
            }
    }


    }

</style>