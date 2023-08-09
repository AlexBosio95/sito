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
                    <h1 data-aos="fade-up" data-aos-duration="1000" >{{$t('header.title')}}</h1>
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

                <div v-if="!isOpen" class="image-profile">
                    <div class="bg-image">
                        <img src="@/assets/img/mypc.png" alt="">
                        <div class="light" :class="{ 'light-on': isLightOn, 'light-off': !isLightOn }"></div>
                        <div class="my-shadow"></div>
                        <div class="desk">
                        </div>
                    </div>
                </div>

                <transition name="fade">
                    <div v-if="isOpen" class="image-profile">
                        <div class="bg-image-close">
                            <img src="@/assets/img/mypc.png" alt="">
                            <div class="light" :class="{ 'light-on': isLightOn, 'light-off': !isLightOn }"></div>
                            <div class="my-shadow"></div>
                            <div class="desk">
                            </div>
                        </div>
                    </div>
                </transition>
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
        isOpen: false,
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

            isLightOn: false,
        }
    },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this.startAnimation();
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
            this.stopAnimation();
        },
        methods: {
            handleScroll() {
            // Verifica la posizione dello scroll
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Imposta isOpen a true se lo scroll è in una determinata posizione
            this.isOpen = scrollTop > 20; // Ad esempio, impostiamo isOpen a true se lo scroll è oltre i 100 pixel dalla parte superiore
            
            // Imposta isOpen a false se lo scroll è tornato in cima
            if (scrollTop === 0) {
            this.isOpen = false;
            }
        },
        startAnimation() {
            this.intervalId = setInterval(() => {
                this.isLightOn = !this.isLightOn;
        }, 500); 
        },
        stopAnimation() {
            clearInterval(this.intervalId);
        },
        },
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
        height: 327;

        .bg-image{
            background: $GradientBlue;
            border-radius: 9rem 9rem 0 0;
            animation-name: fadeToUp;
            animation-duration: 1.7s;
            animation-fill-mode: forwards;

            img{
                height: calc(100vh / 3.8);
                margin: 1rem 2rem 0rem 2rem;
            }

            .my-shadow{
                position: absolute;
                width: 50%;
                bottom: 4rem;
                left: 50%;
                transform: translate(-50%, 0);
                height: 3rem;
                background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 120%);
                overflow: hidden;
                opacity: 0;
                animation-name: scale-up-center;
                animation-duration: 2s;
                animation-delay: 2s;
                animation-fill-mode: forwards;
            }

            .desk{
                width: 80%;
                margin: 0 auto;
                background: $GradientBrown;
                height: 7rem;
                border-radius: .3rem .3rem 0 0;
            }
        }

        .bg-image-close{
            background: $GradientBlue;
            border-radius: 9rem 9rem;

            img{
                height: calc(100vh / 3.8);
                margin: 1rem 2rem 0rem 2rem;
            }

            .my-shadow{
                position: absolute;
                width: 50%;
                bottom: 4rem;
                left: 50%;
                transform: translate(-50%, 0);
                height: 3rem;
                background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 120%);
                overflow: hidden;
            }

            .desk{
                width: 80%;
                margin: 0 auto;
                background: $GradientBrown;
                height: 7rem;
                border-radius: 1rem 1rem ;
                
            }
        }

        .light{
            position: absolute;
            clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
            width: 45%;
            left: 50%;
            transform: translate(-50%, -250%);
            height: 3rem;
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60%);
            overflow: hidden;
            opacity: 0;
            animation-duration: 1s;
        }

        .light-on {
            animation-name: lighton;
            animation-fill-mode: forwards;
        }

        .light-off {
            animation-name: lightoff;
            animation-fill-mode: forwards;
        }

        @keyframes fadeOut {
            from {
                opacity: .8;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes bounce {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        @keyframes lighton {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes lightoff {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
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
    
@keyframes fadeToUp {
    from {
        transform: translateY(150px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
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