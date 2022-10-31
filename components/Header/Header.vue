<template>
    <div class="jumbo-section" id="home">
        <Menu />


        <div class="container">
            <div class="text-center d-flex justify-content-center">
                <div class="box-text">
                    <h6>{{$t('header.topTitle')}}</h6>
                    <h1 class="fw-bold">{{$t('header.title')}}</h1>
                    <p >{{$t('header.subTitle')}}</p>

                    <div class="d-flex justify-content-center">
                        <SquareButton v-for="button in ButtonData" :key="button.id"
                        :text= 'button.text'
                        :type= 'button.type'
                        :url= 'button.url'
                        />
                    </div>

                </div>

                <div class="image-profile ">
                    <div class="bg-image">
                        <img src="@/assets/img/mypc.png" alt="">
                    </div>
                </div>
            </div>

            <div class="name">
                <nuxt-link v-for="lang in availableLang" :key="lang.code" :to="switchLocalePath(lang.code)">
                    {{lang.name}}
                </nuxt-link>
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
            ] 
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
                height: 14rem;
                margin: 4rem 2rem 6.5rem 2rem;
            }
        }

    }

    .name{
        position: absolute;
        top: 1rem;
        color: $Blue;
    }

    .social{
        position: relative;
    }

}

    .before-enter{
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s ease-out;
    }

    .enter{
        opacity: 1;
        transform: translateY(0px);
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