<template>
    <div class="container">
        <div class="loading">
            <div>
                <div class="text-center">
                    <div class="box-image" :class="isStart ? 'explode': ''">
                        <div class="circle pulse">
                            <img src="@/assets/img/mypc.png" alt="" srcset="">
                        </div>
                    </div>
                </div>
                <div class="waviy" :class="isStart ? 'opacity-off': ''">
                    <div class="ball" style="--i:1"></div>
                    <div class="ball" style="--i:2"></div>
                    <div class="ball" style="--i:3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            isStart: false
        }
    },
    methods:{
        getStart(){
            setTimeout(() => {
                this.isStart = true
            }, 4100);

            clearTimeout()
        }
    },
    mounted(){
        this.getStart()
    }

}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

.loading{
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: white;

    .box-image{
        width: 100%;

        .circle{
            aspect-ratio: 1 / 1;
            background: $GradientBlue;
            border-radius: 50%;
            position: relative;

                img{
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: bottom;
                    width: 100%;
                    height: 100%;
                    max-height: 250px;
                }

        }
    }
}

.pulse{
    animation: pulse;
    animation-duration: 1.15s;
    animation-iteration-count: 4;
}

.explode{
    animation-name: explode;
    animation-duration: 1.3s;
    animation-fill-mode: forwards;
}

@keyframes explode {
    from {
        transform: translate(0)
    }
    to {
        transform: translate(0, 600px)
    }
}


// text loading
    .waviy {
        position: relative;
        font-size: 25px;
        width: 100%;
        text-align: center;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .ball{
            width: 20px;
            height: 20px;
            background: $GradientBlue;
            border-radius: 50%;
            animation: waviy 1s 5;
            font-weight: bold;
            animation-delay: calc(.1s * var(--i));
            margin: .3rem;
        }
    }

        @keyframes waviy {
        0%,80%,100% {
            transform: translateY(0)
            
        }
        30% {
            background: $Blue;
            transform: translateY(-20px)
        }
    }

    .opacity-off{
        opacity: 0;
    }


// for mobile 
@media all and (max-width: 600px) {

    .loading{
        width: 100%;

        .box-image{
            width: 70%;
            margin: auto;

            .circle{

                img{
                    max-height: 100%;
                }

            }
        }
    }
}

</style>