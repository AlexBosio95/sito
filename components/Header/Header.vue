<template>
    <div class="jumbo-section" id="home">
        
        <div class="container">
            <div class="lang-box">
                <nuxt-link class="lang" v-for="lang in availableLang" :key="lang.code" :to="switchLocalePath(lang.code)">
                    <i class="fa-solid fa-earth-europe"></i> {{lang.name}}
                </nuxt-link>
            </div>
        </div>


        <div class="container">
            <div class="text-center d-flex justify-content-center">
                <div class="box-text">
                    <h6 data-aos="fade-up" data-aos-duration="800">{{$t('header.topTitle')}}</h6>
                    <h1 data-aos="fade-up" data-aos-duration="1000" class="fw-bold">{{$t('header.title')}}</h1>
                    <p data-aos="fade-up" data-aos-duration="1200">{{$t('header.subTitle')}}</p>

                    <div class="d-flex justify-content-center">
                        <SquareButton v-for="button in ButtonData" :key="button.id"
                        :text= 'button.text'
                        :type= 'button.type'
                        :url= 'button.url'
                        
                        data-aos="fade-up" data-aos-duration="1800"
                        />

                    </div>

                </div>

                <div class="image-profile " data-aos="fade-up" data-aos-duration="1500">
                    <div class="bg-image">
                        <img src="@/assets/img/mypc.png" alt="">
                    </div>
                </div>
            </div>

            <Social class="social"/>

        </div>
    </div>
</template>

<script>
import SquareButton from '../Common/SquareButton.vue';
import Menu from '../Common/Menu.vue';
import Social from './Social.vue';

export default {

    components: { 
        Menu,
        SquareButton,
        Social 
    },

    computed:{
        availableLang(){
            return this.$i18n.locales.filter( i => i.code !== this.$i18n.locale);
        }
    },

    props:{
        dataMenu : Array,
    },
    data: function(){
        return{
            ButtonData: [ 
                {
                id: 0,
                text: this.$t('header.buttonDownload'),
                type: 'standard',
                url: 'https://www.canva.com/design/DAFHzCv3a1Q/0HVBTenwv1gujFO_snMY3g/view?utm_content=DAFHzCv3a1Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
                },
                {
                id: 1,
                text: this.$t('header.buttonAboutme'),
                type: 'fill',
                url: '#about-me',
                }
            ],
        }
    }
}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

.jumbo-section{
    background-color: $GrayStrong;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .box-text{
        text-align: center;
        padding-top: 5rem;
        width: 100%;
        color: $White;

        p{
            text-align: center;
            padding: 0;
            opacity: 0.5;
        }
    }

    .image-profile{
        position: absolute;
        bottom: 0rem;

        .bg-image{
            background: $GradientBlue;
            border-radius: 9rem 9rem 0 0;

            img{
                height: calc(100vh / 3.8);
                margin: 1rem 2rem 6.5rem 2rem;
            }
        }

    }

    .lang-box{
        position: absolute;
        top: 1rem;
        background-color: $Graylight;
        padding: .5rem 1rem;
        border-radius: 2rem;
        

        .lang{
            color: $White;
            text-decoration: none;
        }

        &:hover{
            transform: scale(1.05);
            transition: .5s ease-in-out;
        }



    }

    .social{
        position: relative;
        opacity: 0;
        animation-fill-mode: forwards;
        animation-name: scale-up-center;
        animation-duration: 1s;
        animation-delay: 1s;
    }

}

@keyframes scale-up-center {

    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }

    }

    @media all and (min-width: 992px) {

        .jumbo-section{

            .box-text{
                padding-top: 10rem;
            }

            .social{
                position: absolute;
                bottom: 2rem;
            }
        }

    }



</style>