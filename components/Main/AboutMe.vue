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
                    <div class="box-container" >
                        <BoxInfo v-for="(data, index) in dataBox" :key="index"
                            :title = 'data.title'
                            :logo = 'data.logo'
                            :data=  "data.data"
                            :myGit = 'myGit'
                            :class="isvisible ? 'animation-left' : 'animation-left-off'"
                        />

                        <SquareButton v-for="button in ButtonData" :key="button.id"
                            :text= 'button.text'
                            :type= 'button.type'
                            :url= 'button.url'
                            :class="isvisible ? 'animation-up' : 'animation-up-off'"
                            class="button"
                        />
                        <Paragraf
                            :dataParagraf = 'dataParagraf'
                            :class="isvisible ? 'animation-up' : 'animation-up-off'"
                            v-if="isvisible"
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
    props:{myGit: Object},
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

            dataParagraf: this.$t('aboutMe.dataParagraf'),
            isvisible: true

        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
        // Verifica la posizione dello scroll
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Imposta isOpen a true se lo scroll è in una determinata posizione
        this.isvisible = scrollTop > 600; // Ad esempio, impostiamo isOpen a true se lo scroll è oltre i 100 pixel dalla parte superiore
        
        // Imposta isOpen a false se lo scroll è tornato in cima
            if (scrollTop === 0) {
            this.isvisible = false;
            }
        }
    },
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

    .animation-up{
        animation-name: fadeOut;
        animation-fill-mode: forwards;
        opacity: 0;
        animation-duration: 1s;
        animation-delay: .5s;
    }

    .animation-up-off{
        animation-name: fadeOutOff;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-delay: .5s;
    }

    .animation-left{
        animation-name: fadeLeft;
        animation-fill-mode: forwards;
        opacity: 0;
        animation-duration: 1s;
        animation-delay: .5s;
    }

    .animation-left-off{
        animation-name: fadeLeftOff;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-delay: .5s;
    }

    @keyframes fadeOut {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes fadeOutOff {
        from {
            opacity: 1;
            transform: translateY(0px);
        }
        to {
            opacity: 0;
            transform: translateY(50px);
        }
    }

    @keyframes fadeLeft {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    @keyframes fadeLeftOff {
        from {
            opacity: 1;
            transform: translateX(0px);
        }
        to {
            opacity: 0;
            transform: translateX(50px);
        }
    }

    .button{
        text-align: center;
        margin: .5rem 0;
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